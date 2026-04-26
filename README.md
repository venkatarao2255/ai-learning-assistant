# 🧠 AI Learning Assistant (RAG + LLM + Code Evaluation)

An AI-powered full-stack learning assistant that helps students learn Data Structures & Algorithms interactively using:

- 🧠 LLM-powered chat tutor
- 📚 Problem generation engine
- ⚙️ Code evaluation system (Java)
- 🔍 RAG-style contextual responses

---

# 📸 Project Preview

https://res.cloudinary.com/domfamgtf/image/upload/v1777185376/Screenshot_2026-04-26_112559_jjda6k.png

---

# 🏗️ System Architecture


Frontend (React)
↓
Backend (Node + Express)
↓
LLM API (OpenRouter / GPT)
↓
RAG + Prompt Engine


---

# 📁 Folder Structure


AI-LEARNING-ASSISTANT/
│
├── ai-learning-backend/
│ ├── config/
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ ├── server.js
│ ├── .env
│ ├── package.json
│ └── node_modules/
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ ├── .gitignore
│ └── node_modules/


---

# ⚙️ Features

## 🧠 AI Chat Tutor
- Ask DSA questions in natural language
- Get structured explanations

## 📚 Problem Generator
- Generates DSA problems dynamically
- Focus on stacks, queues, arrays

## ⚙️ Code Evaluation Engine
- Accepts Java solutions
- Detects logical errors
- Suggests optimizations

## 🔍 RAG-based Responses
- Context-aware AI answers
- Improved accuracy via prompt engineering

---

# 🛠️ Tech Stack

### Frontend
- React (Vanilla JS approach)
- HTML + CSS

### Backend
- Node.js
- Express.js

### AI Layer
- OpenRouter / LLM APIs
- Prompt Engineering
- RAG-style logic

---

# 🚀 How to Run Project

## 🔹 Backend
```bash
cd ai-learning-backend
npm install
node server.js
🔹 Frontend
cd frontend
npm install
npm run dev
🔌 API Endpoints
💬 Chat
POST /chat
📚 Generate Problem
GET /problem
⚙️ Evaluate Code
POST /evaluate
🧠 Key Learning Outcomes
Full-stack AI system design
Prompt engineering for LLMs
Backend API architecture
Frontend UI integration
Real-world AI workflow design
📌 Future Improvements
Add vector database (Pinecone / Chroma)
Add authentication system
Add leaderboard for students
Add multi-language code evaluation
