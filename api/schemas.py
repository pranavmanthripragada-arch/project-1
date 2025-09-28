from typing import List, Optional
from pydantic import BaseModel
from enum import Enum

class RoleEnum(str, Enum):
    student = "student"
    teacher = "teacher"
    admin = "admin"

class UserLogin(BaseModel):
    email: str
    password: str

class UserCreate(BaseModel):
    email: str
    password: str
    role: RoleEnum

class TokenData(BaseModel):
    user_id: Optional[int] = None
    standard: Optional[int] = None
    subject: Optional[str] = None
    role: Optional[RoleEnum] = None