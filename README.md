🧠 AI Learning Assistant (RAG + LLM + Code Evaluation System)

An AI-powered full-stack learning platform that helps students master Data Structures & Algorithms (DSA) through an interactive, intelligent tutor system.

It combines:

🧠 Large Language Models (LLMs)
📚 Dynamic problem generation
⚙️ Java code evaluation engine
🔍 RAG (Retrieval-Augmented Generation) style responses
📸 Project Preview

🏗️ System Architecture
Frontend (React)
      ↓
Backend (Node.js + Express)
      ↓
LLM API (OpenRouter / GPT Models)
      ↓
RAG + Prompt Engineering Layer
📁 Project Structure
AI-LEARNING-ASSISTANT/
│
├── ai-learning-backend/
│   ├── config/              # Configuration files (DB, API keys)
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── services/          # AI + evaluation logic
│   ├── server.js          # Entry point
│   ├── .env               # Environment variables
│   ├── package.json
│
├── frontend/
│   ├── src/               # React source code
│   ├── public/
│   ├── package.json
│   ├── .gitignore
│
└── README.md
⚙️ Key Features
🧠 AI Chat Tutor
Ask any DSA question in natural language
Get structured, step-by-step explanations
Concept-focused learning experience
📚 Dynamic Problem Generator
Generates coding problems on demand
Covers Arrays, Stacks, Queues, Linked Lists, etc.
Adjustable difficulty (Easy → Medium → Hard)
⚙️ Code Evaluation Engine
Accepts Java solutions
Validates logic and structure
Suggests optimizations and corrections
🔍 RAG-Powered Intelligence
Context-aware responses using prompt engineering
Improved accuracy using retrieved learning context
Reduces hallucination in AI responses
🛠️ Tech Stack
🎨 Frontend
React.js (Vite)
HTML5 + CSS3
⚙️ Backend
Node.js
Express.js
🤖 AI Layer
OpenRouter / GPT APIs
Prompt Engineering
RAG-style architecture
🚀 How to Run This Project
🔹 Backend Setup
cd ai-learning-backend
npm install
node server.js
🔹 Frontend Setup
cd frontend
npm install
npm run dev
🔌 API Endpoints
💬 Chat with AI Tutor
POST /chat
📚 Generate DSA Problem
GET /problem
⚙️ Evaluate Code
POST /evaluate
🧠 What I Learned From This Project
Designing full-stack AI systems
Implementing RAG-based architecture
Building LLM-powered applications
Backend API structuring using Node.js + Express
Prompt engineering for reliable AI responses
Real-world system integration (frontend + backend + AI APIs)
📌 Future Improvements
🔍 Add Vector Database (Pinecone / ChromaDB)
🔐 User authentication & progress tracking
🏆 Student leaderboard system
🌐 Multi-language code evaluation support
📊 Analytics dashboard for learning insights
