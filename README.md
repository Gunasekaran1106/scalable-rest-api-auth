# 🚀 Scalable REST API with Authentication & Role-Based Access

A full-stack backend-focused project built using **Django REST Framework, PostgreSQL, and React**.

This system implements secure JWT authentication, role-based access control, and complete CRUD functionality for task management.

---

## 📖 Project Overview

This project demonstrates:

- Secure user registration & login
- JWT-based authentication
- Role-based access control (Admin/User)
- Task CRUD operations
- Protected frontend routes
- API documentation (Swagger)
- Scalable modular architecture
- PostgreSQL integration

---

## 🛠 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL
- SimpleJWT (JWT Authentication)
- drf-yasg (Swagger Docs)

### Frontend
- React.js
- Axios
- React Router

---

## 🔐 Authentication & Security

- Password hashing (Django built-in secure hashing)
- JWT Access tokens (1 hour expiry)
- Role-based permissions
- Object-level permission checks
- Protected frontend routes
- CORS secured configuration
- ORM-based SQL injection protection

---

## 📂 Project Structure
```bash
scalable-rest-api-auth/
│
├── backend/                     # Backend application
│   ├── manage.py                # Django management script
│   ├── core/                    # Django project configuration
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   ├── users/                   # Custom user model & authentication
│   └── tasks/                   # Task management module
│
├── frontend/                    # React frontend
│   └── src/
│       ├── pages/
│       ├── components/
│       └── api.js
│
└── README.md
```

## 🧑‍💻 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|------------|
| POST | `/api/v1/users/register/` | Register new user |
| POST | `/api/token/` | Obtain JWT token |
| POST | `/api/token/refresh/` | Refresh access token |

---

### Task Management

| Method | Endpoint | Description |
|---------|----------|------------|
| GET | `/api/v1/tasks/` | List tasks |
| POST | `/api/v1/tasks/` | Create task |
| PUT | `/api/v1/tasks/{id}/` | Update task |
| DELETE | `/api/v1/tasks/{id}/` | Delete task |

---

## 👥 Role-Based Access

- **User**
  - Can create, update, delete their own tasks
  - Can only view their own tasks

- **Admin**
  - Can view and manage all users' tasks
  - Has elevated access

---

## 📄 API Documentation

Swagger UI available at:

http://127.0.0.1:8000/swagger/


---

## 🧱 Database Design

### User Model
- id
- username
- email
- password (hashed)
- role (admin/user)

### Task Model
- id
- title
- description
- status (pending/completed)
- owner (ForeignKey → User)

---

## 🚀 Setup Instructions

### 1️⃣ Backend Setup

```bash
git clone <repository-url>
cd backend
pip install -r requirements.txt

### Configure PostgreSQL in settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'backend_db',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

### Run Migrations

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

### Start Server

python manage.py runserver

### Frontend Setup

cd frontend
npm install
npm start

### Frontend runs on:

http://localhost:3000

## For Deployment

This project is production-ready with:

Environment-based configuration

PostgreSQL production database support

DEBUG=False configuration

Secure secret management

Static file handling with collectstatic

Compatible with:

Render

Railway

AWS

DigitalOcean
