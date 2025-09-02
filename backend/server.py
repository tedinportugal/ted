from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MimeText
from email.mime.multipart import MimeMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Booking Models
class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str  # 'babysitting', 'birthdays', 'skate'
    date: str  # ISO date string
    children: Optional[str] = None  # for babysitting
    duration: Optional[str] = None  # for other services
    message: Optional[str] = None
    language: Optional[str] = 'en'

class Booking(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    service: str
    date: str
    children: Optional[str] = None
    duration: Optional[str] = None
    message: Optional[str] = None
    language: str = 'en'
    status: str = 'pending'  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Email notification function
async def send_booking_notification(booking: Booking):
    """Send email notification to Ted about new booking"""
    try:
        # Email configuration - you'll need to set these in your .env file
        SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
        EMAIL_USER = os.getenv('EMAIL_USER', 'hello@tedinportugal.com')
        EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD', '')  # App password for Gmail
        NOTIFICATION_EMAIL = os.getenv('NOTIFICATION_EMAIL', 'hello@tedinportugal.com')
        
        if not EMAIL_PASSWORD:
            logger.warning("Email password not configured, skipping email notification")
            return False
        
        # Create message
        msg = MimeMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = NOTIFICATION_EMAIL
        msg['Subject'] = f'🎉 Nova Reserva - {booking.service.title()} | tedinportugal.com'
        
        # Service names in Portuguese for email
        service_names = {
            'babysitting': 'Babysitting',
            'birthdays': 'Festa de Aniversário',
            'skate': 'Aulas de Skate'
        }
        
        service_name = service_names.get(booking.service, booking.service.title())
        
        # Format booking date
        booking_date = datetime.fromisoformat(booking.date).strftime('%d/%m/%Y')
        
        # Create HTML email body
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ff6b35, #20b2aa); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
                <h1 style="color: white; margin: 0;">🎉 Nova Reserva!</h1>
                <p style="color: white; margin: 10px 0 0 0;">tedinportugal.com</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h2 style="color: #333; margin-top: 0;">📋 Detalhes da Reserva</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">👤 Nome:</td>
                        <td style="padding: 8px 0; color: #333;">{booking.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">📧 Email:</td>
                        <td style="padding: 8px 0; color: #333;">{booking.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">📱 Telefone:</td>
                        <td style="padding: 8px 0; color: #333;">{booking.phone or 'Não fornecido'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">🎯 Serviço:</td>
                        <td style="padding: 8px 0; color: #333; font-weight: bold;">{service_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">📅 Data:</td>
                        <td style="padding: 8px 0; color: #333; font-weight: bold;">{booking_date}</td>
                    </tr>
        """
        
        # Add service-specific fields
        if booking.children:
            html_body += f"""
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">👶 Crianças:</td>
                        <td style="padding: 8px 0; color: #333;">{booking.children}</td>
                    </tr>
            """
        
        if booking.duration:
            html_body += f"""
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">⏱️ Duração:</td>
                        <td style="padding: 8px 0; color: #333;">{booking.duration}</td>
                    </tr>
            """
        
        html_body += """
                </table>
            </div>
        """
        
        # Add message if provided
        if booking.message:
            html_body += f"""
            <div style="background: #fff3cd; padding: 15px; border-radius: 10px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
                <h3 style="color: #856404; margin-top: 0;">💬 Mensagem do Cliente:</h3>
                <p style="color: #856404; margin-bottom: 0;">{booking.message}</p>
            </div>
            """
        
        html_body += f"""
            <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; border-left: 4px solid #17a2b8; margin-bottom: 20px;">
                <h3 style="color: #0c5460; margin-top: 0;">📞 Próximos Passos:</h3>
                <ul style="color: #0c5460; margin-bottom: 0;">
                    <li>Contactar o cliente via WhatsApp: <strong>{booking.phone}</strong></li>
                    <li>Confirmar disponibilidade para <strong>{booking_date}</strong></li>
                    <li>Acordar detalhes finais do serviço</li>
                    <li>Enviar confirmação ao cliente</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <p style="color: #666; margin: 0;">Reserva criada em: {booking.created_at.strftime('%d/%m/%Y às %H:%M')}</p>
                <p style="color: #666; margin: 5px 0 0 0;">ID da Reserva: {booking.id}</p>
            </div>
        </body>
        </html>
        """
        
        msg.attach(MimeText(html_body, 'html'))
        
        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, NOTIFICATION_EMAIL, text)
        server.quit()
        
        logger.info(f"Booking notification sent successfully for booking {booking.id}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send booking notification: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
