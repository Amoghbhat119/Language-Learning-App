# 🌿 English Learning App

A simple **MERN-based** web application that allows users to **sign up**, **log in**, and explore a structured English learning homepage.

---

## 📋 Overview

### 🏠 Homepage

* Displays introduction, learning paths, and app features.
* Includes **Login** and **Sign Up** buttons.
* Shows a popup after successful login or signup.

### 🔐 Login Page

* Users can log in with **email and password**.
* Validates input and handles incorrect credentials.
* Redirects to the homepage upon successful login.

### 📝 Signup Page

* Allows new users to register with **name, email, and password**.
* Performs form validation and password confirmation.
* Redirects to the homepage with a success popup after signup.

🗄️ **All user data (name, email, encrypted password)** is securely stored in **MongoDB**.

---

## ⚙️ Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Frontend       | React.js (Vite) + Tailwind CSS |
| Backend        | Node.js + Express.js           |
| Database       | MongoDB (Mongoose)             |
| Authentication | JWT (JSON Web Token)           |

---

## 🚀 How to Run the Project

### 🖥️ 1. Clone the repository

```bash
git clone https://github.com/your-username/english-learning-app.git
cd english-learning-app
```

---

### 🌐 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* Runs the app in development mode.
* Default URL: `http://localhost:5173`

---

### ⚙️ 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Then start the backend server:

```bash
npm run server
```

* Default URL: `http://localhost:5000`

---

### 🌍 4. Access the App

Open your browser and navigate to:

```
http://localhost:5173
```

---

## 👨‍💻 Developer

**Amogh Venkatraman Bhat**
GitHub: [Amoghbhat119](https://github.com/Amoghbhat119)
LinkedIn: [Amogh Bhat](https://www.linkedin.com/in/amogh-bhat-509761343)
