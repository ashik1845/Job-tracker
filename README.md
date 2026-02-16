# 🚀HireFlow – Multi-User Job Application Tracking Platform

A full-stack multi-user job application tracking system built with the MERN stack.  
Users can register, log in securely, track applications using a Kanban board, and analyze job search performance with interactive dashboards.

---

## 🌐 Live Demo

## https://hireflow-jobtracker.netlify.app/

---

## 🧠 Features

### 🔐 Authentication

- User Registration
- User Login
- JWT-based authentication
- Protected routes
- Multi-user support (user-specific data)
- Secure password hashing using bcrypt

### 📋 Application Management

- Add job applications
- Drag & drop Kanban board (Applied → OA → Interview → Offer → Rejected)
- Status-based color coding
- Interview date tracking
- Real-time UI updates

### 📊 Analytics Dashboard

- Total applications
- Offer count
- Rejected count
- Success rate %
- Monthly applications bar chart
- Status distribution pie chart

### 🎨 UI & UX

- Modern dark theme
- Montserrat font
- Fully responsive design
- Mobile-friendly Kanban scroll
- Smooth animations
- Hidden scrollbars for clean UI

---

## 🏗 Tech Stack

### Frontend

- React (Vite)
- React Router
- Axios
- Chart.js
- dnd-kit (Drag & Drop)
- CSS Grid & Flexbox

### Backend

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- bcryptjs

---

## 🔒 Security

- Passwords hashed using bcrypt
- JWT token-based authentication
- Protected API routes
- User-specific database filtering
- Environment variable protection

---

## 📁 Project Structure

```
smart-job-tracker/
│
├── client/                     # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route pages (Login, Register, Dashboard, etc.)
│   │   ├── services/           # Axios API configuration
│   │   ├── styles/             # CSS files
│   │   ├── utils/              # Helper functions & constants
│   │   └── App.jsx
│   └── package.json
│
├── server/                     # Express Backend
│   ├── config/                 # Database configuration
│   ├── controllers/            # Business logic
│   ├── middleware/             # Auth & error middleware
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashik1845/Job-tracker.git
cd Job-tracker
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔄 Application Workflow

1. Register a new account
2. Login securely using JWT authentication
3. Add job applications
4. Drag cards across Kanban columns to update status
5. Monitor interview stages
6. View analytics dashboard
7. Logout securely

---

## 📈 Future Enhancements

- Email verification
- Password reset functionality
- Profile management
- Role-based access control
- Export analytics as CSV
- Reminder notifications
- CI/CD deployment pipeline

---

## 🎯 What This Project Demonstrates

- Full-stack MERN development
- REST API architecture
- Secure authentication implementation
- MongoDB schema modeling
- Responsive UI design
- Modern SaaS-style dashboard development
- Clean and scalable project structure

---

## 👤 Author

**Ashik M**  
Computer Science Engineering Student  
MERN Stack Enthusiast

---
