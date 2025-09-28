from fastapi import APIRouter, status, HTTPException
from fastapi.params import Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from datetime import datetime, timedelta, UTC
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from .. import schemas, models
from ..database import get_db
from ..config import SECRET_KEY, JWT_ALGORITHM, ACCESS_TOKEN_EXPIRE_DAYS

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated = "auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

def generate_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(UTC) + timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=JWT_ALGORITHM)
    return encoded_jwt

@router.post("/student_login", tags=["Authentication"])
def student_login(request: OAuth2PasswordRequestForm = Depends(), db: Session=Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.email == request.username).first()

    if not student:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Student doesn't exist/not found")
    
    if not pwd_context.verify(request.password, student.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Password")
    
    access_token = generate_token(data = {"user_id": student.id,
                                          "role": student.role,
                                          "standard": student.standard})

    return {"access_token": access_token,
            "role": student.role,
            "email": student.email,
            "standard": student.standard,
            "token_type": "Bearer"}

@router.post("/teacher_login", tags=["Authentication"])
def teacher_login(request: OAuth2PasswordRequestForm = Depends(), db: Session=Depends(get_db)):
    teacher = db.query(models.Teacher).filter(models.Teacher.email == request.username).first()

    if not teacher:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Student doesn't exist/not found")
    
    if not pwd_context.verify(request.password, teacher.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Password")
    
    access_token = generate_token(data = {"user_id": teacher.id,
                                          "role": teacher.role,
                                          "subject": teacher.subject})

    return {"access_token": access_token,
            "role": teacher.role,
            "email": teacher.email,
            "subject": teacher.subject,
            "token_type": "Bearer"}

@router.get("/hash_password")
def hash_pwd(request: str):
    return {"hashed_password": pwd_context.hash(request)}