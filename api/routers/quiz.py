from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List
from ..schemas import QuizCreate, QuizAttemptResponse, QuizAttemptStart, QuizQuestion, QuizQuestionResponse, QuizQuestionWithAnswer, QuizResponse, StudentAnswerResponse, StudentAnswerSubmit
from ..config import supabase
from ..database import get_db
from .. import models

router = APIRouter(
    prefix="/quizzes",
    tags=["quizzes"]
)

@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_quiz(request: QuizCreate, db: Session = Depends(get_db)):
    try:
        # Step 1: Find the subject based on syllabus, standard, and subject name
        subject = db.query(models.Subject).filter(
            models.Subject.name == request.subject,
            models.Subject.standard == request.standard
        ).first()
        
        if not subject:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"Subject '{request.subject}' not found for standard {request.standard}"
            )
        
        # Step 2: Find the chapter based on subject and chapter name
        chapter = db.query(models.Chapter).filter(
            models.Chapter.name == request.chapter,
            models.Chapter.subject_id == subject.id
        ).first()
        
        if not chapter:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"Chapter '{request.chapter}' not found in subject '{request.subject}'"
            )
        
        # Step 3: Check if quiz with same name already exists for this chapter
        existing_quiz = db.query(models.Quiz).filter(
            models.Quiz.chapter_id == chapter.id,
            models.Quiz.quiz_name == request.quiz_name
        ).first()
        
        if existing_quiz:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT, 
                detail=f"Quiz '{request.quiz_name}' already exists for chapter '{request.chapter}'"
            )
        
        # Step 4: Validate that we have exactly 20 questions
        if len(request.questions) != 20:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, 
                detail=f"Quiz must have exactly 20 questions. Received {len(request.questions)} questions."
            )
        
        # Step 5: Create the quiz entry
        new_quiz = models.Quiz(
            quiz_name=request.quiz_name,
            description=request.description,
            chapter_id=chapter.id,
            is_active=True
        )
        
        db.add(new_quiz)
        db.flush()  # Flush to get the quiz ID without committing
        
        # Step 6: Create all quiz questions
        quiz_questions = []
        for index, question_data in enumerate(request.questions, start=1):
            # Validate correct_option
            if question_data.correct_option not in ['A', 'B', 'C', 'D']:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST, 
                    detail=f"Question {index}: correct_option must be 'A', 'B', 'C', or 'D'. Got '{question_data.correct_option}'"
                )
            
            quiz_question = models.QuizQuestion(
                quiz_id=new_quiz.id,
                question_number=index,
                question_text=question_data.question_text,
                option_a=question_data.option_a,
                option_b=question_data.option_b,
                option_c=question_data.option_c,
                option_d=question_data.option_d,
                correct_option=question_data.correct_option.upper(),
                explanation=question_data.explanation
            )
            quiz_questions.append(quiz_question)
        
        # Add all questions to the session
        db.add_all(quiz_questions)
        
        # Commit all changes
        db.commit()
        db.refresh(new_quiz)
        
        return {
            "message": "Quiz created successfully",
            "quiz_id": new_quiz.id,
            "quiz_name": new_quiz.quiz_name,
            "chapter": request.chapter,
            "subject": request.subject,
            "standard": request.standard,
            "syllabus": request.syllabus,
            "total_questions": len(quiz_questions),
            "is_active": new_quiz.is_active
        }
        
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")

@router.get("/by-subject", status_code=status.HTTP_200_OK, response_model=List[QuizResponse])
def get_quizzes_by_subject(
    subject: str,
    standard: int,
    db: Session = Depends(get_db)
):
    try:
        # Step 1: Find the subject based on name and standard
        subject_obj = db.query(models.Subject).filter(
            models.Subject.name == subject,
            models.Subject.standard == standard
        ).first()
        
        if not subject_obj:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"Subject '{subject}' not found for standard {standard}"
            )
        
        # Step 2: Get all chapters for this subject
        chapters = db.query(models.Chapter).filter(
            models.Chapter.subject_id == subject_obj.id
        ).all()
        
        if not chapters:
            return []  # Return empty list if no chapters found
        
        # Step 3: Get all quizzes for all chapters in this subject
        chapter_ids = [chapter.id for chapter in chapters]
        quizzes = db.query(models.Quiz).filter(
            models.Quiz.chapter_id.in_(chapter_ids)
        ).all()
        
        # Step 4: Format the response with questions included for offline caching
        quiz_responses = []
        for quiz in quizzes:
            # Get all questions for this quiz
            questions = db.query(models.QuizQuestion).filter(
                models.QuizQuestion.quiz_id == quiz.id
            ).order_by(models.QuizQuestion.question_number).all()
            
            # Format questions according to QuizQuestionResponse schema (without correct_option for students)
            question_responses = []
            for question in questions:
                question_responses.append(QuizQuestionResponse(
                    id=question.id,
                    question_number=question.question_number,
                    question_text=question.question_text,
                    option_a=question.option_a,
                    option_b=question.option_b,
                    option_c=question.option_c,
                    option_d=question.option_d
                ))
            
            # Create complete quiz response with questions
            quiz_responses.append(QuizResponse(
                id=quiz.id,
                quiz_name=quiz.quiz_name,
                description=quiz.description,
                chapter_id=quiz.chapter_id,
                is_active=quiz.is_active,
                questions=question_responses
            ))
        
        return quiz_responses
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {e}")
    


