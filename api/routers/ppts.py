from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from ..schemas import PPTSchema, PPTResponse
from ..config import supabase
from ..database import get_db
from .. import models

router = APIRouter(
    prefix="/ppts",
   tags=["PPTs"]
)

@router.post("/create-buckets", status_code=status.HTTP_201_CREATED)
def create_storage_buckets():
    """Create the required storage buckets if they don't exist"""
    try:
        buckets_to_create = ['ncert', 'pseb']
        created_buckets = []
        
        for bucket_name in buckets_to_create:
            try:
                # Try to create the bucket
                result = supabase.storage.create_bucket(bucket_name, {'public': True})
                created_buckets.append(bucket_name)
                print(f"Created bucket: {bucket_name}")
            except Exception as e:
                # Bucket might already exist
                if "already exists" in str(e).lower():
                    print(f"Bucket {bucket_name} already exists")
                else:
                    print(f"Error creating bucket {bucket_name}: {e}")
        
        return {
            "message": "Storage buckets setup completed",
            "buckets_processed": buckets_to_create,
            "newly_created": created_buckets
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to create buckets: {e}")

   
@router.post("/upload", status_code=status.HTTP_201_CREATED)
def upload_ppt(
    syllabus: str = Form(...),
    standard: int = Form(...),
    subject: str = Form(...),
    chapter: str = Form(...),
    file: UploadFile = File(...), 
    db: Session = Depends(get_db)
):
    try:
        # Check if PPT already exists for this subject, standard, and chapter
        existing_ppt = db.query(models.PPT).filter(
            models.PPT.subject == subject,
            models.PPT.standard == standard,
            models.PPT.chapter == chapter
        ).first()
        
        if existing_ppt:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT, 
                detail=f"PPT already exists for {subject} class {standard} chapter {chapter}"
            )
        
        # Read file content
        file_content = file.file.read()
        
        # Determine bucket based on syllabus
        bucket_name = syllabus.lower()  # 'ncert' or 'pseb'
        
        # Create folder structure: class_x/subject/chapter_filename.ppt
        folder_path = f"class_{standard}/{subject}/{chapter}_{file.filename}"
        
        # Upload to the appropriate bucket with folder structure
        try:
            response = supabase.storage.from_(bucket_name).upload(folder_path, file_content)
            print(f"Upload response: {response}")  # Debug log
            
            # Response is an UploadResponse object with path attribute
            if not response or not hasattr(response, 'path'):
                raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Upload failed - invalid response")
                
        except Exception as upload_error:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to upload file to Supabase Storage: {upload_error}")
        
        # Get public URL for the uploaded file
        try:
            file_url_response = supabase.storage.from_(bucket_name).get_public_url(folder_path)
            # Handle both string response and dict response
            if isinstance(file_url_response, str):
                file_url = file_url_response
            elif isinstance(file_url_response, dict):
                file_url = file_url_response.get('publicURL') or file_url_response.get('url', str(file_url_response))
            else:
                file_url = str(file_url_response)
        except Exception as url_error:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to get public URL: {url_error}")
        
        # Save PPT information to database
        new_ppt = models.PPT(
            subject=subject,
            standard=standard,
            chapter=chapter,
            syllabus=syllabus,
            file_url=file_url,
            filename=file.filename,
            file_path=folder_path
        )
        
        db.add(new_ppt)
        db.commit()
        db.refresh(new_ppt)
        
        return {
            "id": new_ppt.id,
            "file_url": file_url,
            "bucket": bucket_name,
            "path": folder_path,
            "subject": subject,
            "standard": standard,
            "chapter": chapter,
            "syllabus": syllabus,
            "message": f"PPT uploaded successfully to {bucket_name}/class_{standard}/{subject}/"
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")
    finally:
        file.file.close()

@router.get("/ppt", status_code=status.HTTP_200_OK)
def get_ppt(
    syllabus: str,
    standard: int, 
    subject: str,
    chapter: str,
    db: Session = Depends(get_db)
):
    try:
        ppt = db.query(models.PPT).filter(
            models.PPT.syllabus == syllabus,
            models.PPT.subject == subject,
            models.PPT.standard == standard,
            models.PPT.chapter == chapter
        ).first()
        
        if not ppt:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"No PPT found for {subject} class {standard} chapter {chapter}"
            )
        
        return {
            "id": ppt.id,
            "file_url": ppt.file_url,
            "filename": ppt.filename,
            "subject": ppt.subject,
            "standard": ppt.standard,
            "chapter": ppt.chapter,
            "syllabus": ppt.syllabus,
            "file_path": ppt.file_path
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")

@router.put("/ppt/update", status_code=status.HTTP_200_OK)
def update_ppt(
    syllabus: str = Form(...),
    standard: int = Form(...),
    subject: str = Form(...),
    chapter: str = Form(...),
    file: UploadFile = File(...), 
    db: Session = Depends(get_db)
):
    try:
        # Find existing PPT
        existing_ppt = db.query(models.PPT).filter(
            models.PPT.syllabus == syllabus,
            models.PPT.subject == subject,
            models.PPT.standard == standard,
            models.PPT.chapter == chapter
        ).first()
        
        if not existing_ppt:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"No PPT found for {subject} class {standard} chapter {chapter}"
            )
        
        # Read new file content
        file_content = file.file.read()
        
        # Determine bucket based on syllabus
        bucket_name = syllabus.lower()
        
        # Delete old file from storage
        delete_response = supabase.storage.from_(bucket_name).remove([existing_ppt.file_path])
        
        # Create new folder path
        new_folder_path = f"class_{standard}/{subject}/{chapter}_{file.filename}"
        
        # Upload new file
        try:
            upload_response = supabase.storage.from_(bucket_name).upload(new_folder_path, file_content)
            print(f"Update upload response: {upload_response}")  # Debug log
            
            # Response is an UploadResponse object with path attribute
            if not upload_response or not hasattr(upload_response, 'path'):
                raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Upload failed - invalid response")
                
        except Exception as upload_error:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to upload new file to Supabase Storage: {upload_error}")
        
        # Get new public URL
        try:
            new_file_url_response = supabase.storage.from_(bucket_name).get_public_url(new_folder_path)
            # Handle both string response and dict response
            if isinstance(new_file_url_response, str):
                new_file_url = new_file_url_response
            elif isinstance(new_file_url_response, dict):
                new_file_url = new_file_url_response.get('publicURL') or new_file_url_response.get('url', str(new_file_url_response))
            else:
                new_file_url = str(new_file_url_response)
        except Exception as url_error:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to get public URL: {url_error}")
        
        # Update database record
        existing_ppt.file_url = new_file_url
        existing_ppt.filename = file.filename
        existing_ppt.file_path = new_folder_path
        
        db.commit()
        db.refresh(existing_ppt)
        
        return {
            "id": existing_ppt.id,
            "file_url": new_file_url,
            "filename": file.filename,
            "subject": subject,
            "standard": standard,
            "chapter": chapter,
            "syllabus": syllabus,
            "file_path": new_folder_path,
            "message": f"PPT updated successfully for {subject} class {standard} chapter {chapter}"
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")
    finally:
        file.file.close()

@router.delete("/ppt/delete", status_code=status.HTTP_200_OK)
def delete_ppt(request: PPTSchema, db: Session = Depends(get_db)):
    try:
        # Find existing PPT
        existing_ppt = db.query(models.PPT).filter(
            models.PPT.syllabus == request.syllabus,
            models.PPT.subject == request.subject,
            models.PPT.standard == request.standard,
            models.PPT.chapter == request.chapter
        ).first()
        
        if not existing_ppt:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"No PPT found for {request.subject} class {request.standard} chapter {request.chapter}"
            )
        
        # Delete file from Supabase storage
        bucket_name = existing_ppt.syllabus.lower()
        delete_response = supabase.storage.from_(bucket_name).remove([existing_ppt.file_path])
        
        # Delete record from database
        db.delete(existing_ppt)
        db.commit()
        
        return {
            "message": f"PPT deleted successfully for {existing_ppt.subject} class {existing_ppt.standard} chapter {existing_ppt.chapter}",
            "deleted_file": existing_ppt.filename,
            "deleted_path": existing_ppt.file_path
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")