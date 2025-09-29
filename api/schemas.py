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

class PPTSchema(BaseModel):
    syllabus: str
    standard: int
    subject: str
    chapter: str

class PPTResponse(BaseModel):
    ppt_url: str
    syllabus: str
    standard: int
    subject: str
    chapter: str

class TokenData(BaseModel):
    user_id: Optional[int] = None
    standard: Optional[int] = None
    subject: Optional[str] = None
    role: Optional[RoleEnum] = None


# Quiz System Schemas

class QuizQuestion(BaseModel):
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_option: str  # 'A', 'B', 'C', or 'D'
    explanation: Optional[str] = None

class QuizCreate(BaseModel):
    quiz_name: str
    syllabus: str
    standard: int
    subject: str
    chapter: str
    description: Optional[str] = None
    questions: List[QuizQuestion]

class QuizResponse(BaseModel):
    id: int
    quiz_name: str
    description: Optional[str]
    chapter_id: int
    is_active: bool
    questions: List["QuizQuestionResponse"]  # Include all questions for offline caching

class QuizQuestionResponse(BaseModel):
    id: int
    question_number: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    # Note: correct_option is not included for student view

class QuizQuestionWithAnswer(QuizQuestionResponse):
    correct_option: str
    explanation: Optional[str]

class StudentAnswerSubmit(BaseModel):
    question_id: int
    selected_option: str  # 'A', 'B', 'C', or 'D'

class StudentAttemptSubmit(BaseModel):
    quiz_id: int
    answers: List[StudentAnswerSubmit]

class QuizAttemptStart(BaseModel):
    quiz_id: int

class QuizAttemptResponse(BaseModel):
    id: int
    quiz_id: int
    score: Optional[int]
    total_questions: int
    is_completed: bool

class StudentAnswerResponse(BaseModel):
    id: int
    question_id: int
    selected_option: str
    is_correct: bool