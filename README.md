# 🌿 PadhaNeer Connect

PadhaNeer Connect is a web-based platform that celebrates Palmyra culture and empowers Palm Guardians — including tappers, activists, and advocates. 
It combines interactive maps, AI-powered Q&A, and open-source collaboration to raise awareness and connect communities.

---

## 🚀 Project Overview

- Built with **HTML, CSS, and JavaScript** for the frontend
- Displays Palm Guardians on a **Leaflet.js** interactive map
- Uses **Gemini AI** to answer questions about PadhaNeer and Palmyra culture
- Hosted on **Netlify**, including serverless backend functions
- Backend logic written in **Node.js**

---

## 🧰 Key Technologies

| Tool/Platform     | Purpose                                                  |
|-------------------|----------------------------------------------------------|
| **GitHub**        | Stores and manages code, enables collaboration           |
| **Netlify**       | Hosts the website and backend functions                  |
| **Gemini API**    | Provides AI-generated answers to user questions          |
| **Leaflet Maps**  | Displays Palm Guardian locations on an interactive map   |
| **Node.js**       | Powers backend logic via Netlify Functions               |
| **HTML/CSS/JS**   | Builds the user interface                                |

---

## 🛠️ How It Works

### 🔹 GitHub
- Tracks code changes and supports collaboration
- Automatically deploys updates to Netlify
- Keeps sensitive data (like API keys) out of the codebase

### 🔹 Netlify Functions
- Serverless backend written in Node.js
- Handles requests to Gemini AI and returns responses
- Scales automatically with no server management

### 🔹 Environment Variables
- Gemini API key is stored securely in Netlify
- Prevents exposure of sensitive credentials

### 🔹 Gemini API
- Google's AI model for natural language understanding
- Receives questions and returns smart, human-like answers

### 🔹 Leaflet Maps
- JavaScript library for interactive maps
- Displays Palm Guardian markers with location and contact info

---

## 🔄 Netlify Function vs Python Backend

| Feature               | Netlify Function (Node.js) | Python (Flask/Django)         |
|-----------------------|----------------------------|-------------------------------|
| Setup                 | Instant — drop a `.js` file | Requires server setup         |
| Hosting               | Built into Netlify          | Needs external hosting        |
| Language              | JavaScript (Node.js)        | Python                        |
| Speed for small tasks | Very fast                   | Slightly heavier              |
| Scalability           | Auto-scales with Netlify    | Depends on hosting provider   |
| Best for              | Web apps, chatbots          | ML models, complex APIs       |
| Security              | Encrypted env variables     | Manual setup required         |

---

## ⚠️ Limitations

- **Gemini API** has rate and token limits on the free tier
- **Leaflet map** is static unless connected to a live database

---

## 📚 Additional Info

### What Is an API?
An API (Application Programming Interface) lets apps talk to each other securely and efficiently.

**In PadhaNeer Connect:**
- The website sends a question to Gemini
- Gemini AI replies with an answer
- You never see Gemini’s internal code — just the result

**Why APIs Matter:**
✅ Enable chatbots, maps, payments, weather updates, and more  
✅ Keep systems modular and secure  
✅ Power modern web and mobile apps

