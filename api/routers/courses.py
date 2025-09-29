from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models

router = APIRouter(
    prefix="/courses",
    tags=["Courses"]
)

@router.post("/add_course", status_code=status.HTTP_201_CREATED)
def add_course(name: str = Form(...), standard: int = Form(...), db: Session = Depends(get_db)):
    existing_course = db.query(models.Subject).filter(models.Subject.name == name, models.Subject.standard == standard).first()
    if existing_course:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Course already exists")
    
    new_course = models.Subject(name=name, standard=standard)
    db.add(new_course)
    db.commit()
    db.refresh(new_course)
    return {"message": "Course added successfully", "course_id": new_course.id}

@router.post("/add_chapter", status_code=status.HTTP_201_CREATED)
def add_chapter(name: str = Form(...), subject: str = Form(...), standard: int = Form(...), db: Session = Depends(get_db)):
    subject = db.query(models.Subject).filter(models.Subject.name == subject, models.Subject.standard == standard).first()
    if not subject:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subject not found")
    
    existing_chapter = db.query(models.Chapter).filter(models.Chapter.name == name, models.Chapter.subject_id == subject.id).first()
    if existing_chapter:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Chapter already exists in this subject")
    
    new_chapter = models.Chapter(name=name, subject_id=subject.id)
    db.add(new_chapter)
    db.commit()
    db.refresh(new_chapter)
    return {"message": "Chapter added successfully", "chapter_id": new_chapter.id}

@router.get("/list_courses", status_code=status.HTTP_200_OK)
def list_courses(standard: int, db: Session = Depends(get_db)):
    courses = db.query(models.Subject).filter(models.Subject.standard == standard).all()
    return courses

@router.get("/list_chapters", status_code=status.HTTP_200_OK)
def list_chapters(subject: str, db: Session = Depends(get_db)):
    subject = db.query(models.Subject).filter(models.Subject.name == subject).first()
    if not subject:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subject not found")
    
    chapters = db.query(models.Chapter).filter(models.Chapter.subject_id == subject.id).all()
    return chapters


