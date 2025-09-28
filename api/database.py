from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import DATABASE_URL

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set.")

# Create engine with better connection settings for Supabase
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,  # Verify connections before use
    pool_recycle=300,    # Recycle connections every 5 minutes
    pool_timeout=20,     # Wait up to 20 seconds for connection
    max_overflow=0       # Don't create more connections than pool_size
)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
