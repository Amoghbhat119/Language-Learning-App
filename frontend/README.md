# 🌿 English Learning App

A simple **MERN-based** web application featuring a **Login page**, **Signup page**, and **Homepage**  for English learning.

---

## 📋 Overview

### 🏠 Homepage

* Displays the app introduction, learning paths, and key highlights.


### 🔐 Login Page

* Allows existing users to log in using **email** and **password**.
* Performs input validation and displays appropriate error messages.
* Redirects to the homepage upon successful login.

### 📝 Signup Page

* Enables new users to register by entering **name, email, and password**.
* Validates all fields and checks for password confirmation.
* Redirects to the homepage with a success popup after registration.

🗄️ **All user details are securely stored in the MongoDB database**, including:

* Name
* Email
* Password (encrypted using bcrypt)

---

## ⚙️ Tech Stack

* **Frontend:** React.js (Vite) + Tailwind CSS
* **Backend:** Node.js + Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)

---

## 🚀 How to Run

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/english-learning-app.git
cd english-learning-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the frontend

```bash
npm run dev
```

### 4️⃣ Start the backend (in a separate terminal)

```bash
cd backend
npm install
npm run server
```

### 5️⃣ Open in browser

```
http://localhost:5173
```

---

## 👨‍💻 Developer

**Amogh Venkatraman Bhat**
GitHub: [Amoghbhat119](https://github.com/Amoghbhat119)
LinkedIn: [Amogh Bhat](https://www.linkedin.com/in/amogh-bhat-509761343)
