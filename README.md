# Vanaalayam Resort Booking System

A full-stack resort booking application built with **React** and
**Django REST Framework** that allows users to select room types,
check room availability, submit booking details, and receive
booking confirmation through email.

## Key Features

- Room type selection
- Room availability checking
- Check-in/check-out date and time validation
- Phone and email validation
- Booking creation through REST API
- Automatic room availability update after booking
- Booking confirmation email
- Responsive React UI
- Django REST Framework backend
- MySQL database
- Git/GitHub version control

## Tech Stack

### Frontend
- React
- Vite
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Django
- Django REST Framework

### Database
- MySQL

### Tools
- Git
- GitHub
- Postman
- VS Code

## Application Flow

User selects a room
→ Enters booking details
→ Frontend validation
→ Django REST API
→ Room availability check
→ Booking created
→ Available room count updated
→ Confirmation email sent

## Project Structure

```text
vanaalayam/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── manage.py
    ├── requirements.txt
    └── ...
