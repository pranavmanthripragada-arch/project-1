from sqlalchemy import Column, Integer, String, Float, ForeignKey, UniqueConstraint
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

class PPT(Base):
    __tablename__ = "PPTs"
    __table_args__ = (UniqueConstraint('subject', 'standard', 'chapter', name='unique_ppt_per_chapter'),)

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, nullable=False)
    standard = Column(Integer, nullable=False)
    chapter = Column(String, nullable=False)
    syllabus = Column(String, nullable=False)  # ncert or pseb
    file_url = Column(String, nullable=False)
    filename = Column(String, nullable=False)
    file_path = Column(String, nullable=False)  # full path in storage
