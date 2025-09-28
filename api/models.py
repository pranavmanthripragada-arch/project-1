from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy import Enum as SQLAlchemyEnum
from .database import Base
from .schemas import RoleEnum

class Student(Base):
    __tablename__ = "Students"

    id = Column(Integer, primary_key=True, index=False)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    standard = Column(Integer, nullable=False)
    role = Column(SQLAlchemyEnum(RoleEnum, name="role_enum"), default=RoleEnum.student, nullable=False)

class Teacher(Base):
    __tablename__ = "Teachers"

    id = Column(Integer, primary_key=True, index=False)
    name = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(SQLAlchemyEnum(RoleEnum, name="role_enum"), default=RoleEnum.teacher, nullable=False)

class Subject(Base):
    __tablename__ = "Subjects"

    id = Column(Integer, primary_key=True, index=False)
    name = Column(String, unique=True, nullable=False)
    standard = Column(Integer, nullable=False)
    
    chapters = relationship("Chapter", back_populates="subject")

class Chapter(Base):
    __tablename__ = "Chapters"

    id = Column(Integer, primary_key=True, index=False)
    name = Column(String, nullable=False)
    subject_id = Column(Integer, ForeignKey("Subjects.id"), nullable=False)

    subject = relationship("Subject", back_populates="chapters")
