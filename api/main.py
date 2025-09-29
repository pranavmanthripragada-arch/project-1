from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from psycopg2 import IntegrityError
from contextlib import asynccontextmanager
from passlib.context import CryptContext
from . import models
from .schemas import UserCreate, RoleEnum
from .database import engine, get_db
from .routers import login, ppts, courses, quiz
from .config import supabase

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database tables on startup"""
    try:
        models.Base.metadata.create_all(bind=engine)
        print("✅ Database tables created successfully")
    except Exception as e:
        print(f"❌ Failed to create database tables: {e}")
        raise
    yield

origins = ["https://earnest-treacle-320235.netlify.app/"]

pwd_context = CryptContext(schemes=["bcrypt"], deprecated = "auto")

app = FastAPI(
    title="VidyaVistaar API",
    description='''API for VidyaVistaar website [GitHub Repo](https://github.com/pranavmanthripragada-arch/project-1)''',
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login.router)
app.include_router(ppts.router)
app.include_router(courses.router)
app.include_router(quiz.router)

@app.get("/")
def home():
    return {"message": "Read docs at /docs"}

@app.get("/db-health", status_code=status.HTTP_200_OK)
async def db_health_check():
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return {"status": "✅ Database connected"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Database connection failed: {e}"
        )
    
@app.post("/create-user", status_code=status.HTTP_201_CREATED)
def create_user(request: UserCreate, db: Session=Depends(get_db)):
    existing_email = db.query(models.User).filter((models.User.email == request.email)).first()

    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already used"
        )

    new_user = models.User(
        email = request.email,
        password = pwd_context.hash(request.password),
        role = request.role
    )

    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return {"message": "User created successfully"}
    
    except IntegrityError as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already exists"
        )