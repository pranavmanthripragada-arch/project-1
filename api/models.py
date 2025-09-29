from sqlalchemy import Column, Integer, String, Float, ForeignKey, UniqueConstraint, Boolean, Text
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

    # Quiz relationships
    quiz_attempts = relationship("QuizAttempt", back_populates="student")

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
    quizzes = relationship("Quiz", back_populates="chapter")

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


# Quiz System Models

class Quiz(Base):
    __tablename__ = "Quizzes"
    __table_args__ = (UniqueConstraint('chapter_id', 'quiz_name', name='unique_quiz_per_chapter'),)

    id = Column(Integer, primary_key=True, index=True)
    quiz_name = Column(String, nullable=False)  # e.g., "Algebra Quiz 1"
    description = Column(Text, nullable=True)   # Optional quiz description
    chapter_id = Column(Integer, ForeignKey("Chapters.id"), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)  # To enable/disable quiz

    # Relationships
    chapter = relationship("Chapter", back_populates="quizzes")
    questions = relationship("QuizQuestion", back_populates="quiz", cascade="all, delete-orphan")
    attempts = relationship("QuizAttempt", back_populates="quiz", cascade="all, delete-orphan")


class QuizQuestion(Base):
    __tablename__ = "QuizQuestions"

    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("Quizzes.id"), nullable=False)
    question_number = Column(Integer, nullable=False)  # 1 to 20
    question_text = Column(Text, nullable=False)
    option_a = Column(String, nullable=False)
    option_b = Column(String, nullable=False)
    option_c = Column(String, nullable=False)
    option_d = Column(String, nullable=False)
    correct_option = Column(String, nullable=False)  # 'A', 'B', 'C', or 'D'
    explanation = Column(Text, nullable=True)  # Optional explanation for the answer

    # Relationships
    quiz = relationship("Quiz", back_populates="questions")
    student_answers = relationship("StudentAnswer", back_populates="question", cascade="all, delete-orphan")

    __table_args__ = (UniqueConstraint('quiz_id', 'question_number', name='unique_question_number_per_quiz'),)


class QuizAttempt(Base):
    __tablename__ = "QuizAttempts"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("Students.id"), nullable=False)
    quiz_id = Column(Integer, ForeignKey("Quizzes.id"), nullable=False)
    score = Column(Integer, nullable=True)  # Out of total questions (calculated after completion)
    total_questions = Column(Integer, default=20, nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)

    # Relationships
    student = relationship("Student", back_populates="quiz_attempts")
    quiz = relationship("Quiz", back_populates="attempts")
    answers = relationship("StudentAnswer", back_populates="attempt", cascade="all, delete-orphan")


class StudentAnswer(Base):
    __tablename__ = "StudentAnswers"

    id = Column(Integer, primary_key=True, index=True)
    attempt_id = Column(Integer, ForeignKey("QuizAttempts.id"), nullable=False)
    question_id = Column(Integer, ForeignKey("QuizQuestions.id"), nullable=False)
    selected_option = Column(String, nullable=False)  # 'A', 'B', 'C', or 'D'
    is_correct = Column(Boolean, nullable=False)  # Calculated when answer is saved

    # Relationships
    attempt = relationship("QuizAttempt", back_populates="answers")
    question = relationship("QuizQuestion", back_populates="student_answers")

    __table_args__ = (UniqueConstraint('attempt_id', 'question_id', name='unique_answer_per_question_per_attempt'),)
