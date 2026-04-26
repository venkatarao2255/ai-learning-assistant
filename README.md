# 🧠 AI Learning Assistant  
### RAG + LLM + Code Evaluation System  

An AI-powered full-stack learning platform designed to help students master **Data Structures & Algorithms (DSA)** through an interactive, intelligent tutor system. This project bridges the gap between passive learning and active coding by combining LLM-driven guidance with real-time code validation.

---

## 📸 Project Preview

![AI Learning Assistant Preview](https://res.cloudinary.com/domfamgtf/image/upload/v1777185376/Screenshot_2026-04-26_112559_jjda6k.png)

---

## 🏗️ System Architecture

The platform follows a decoupled client-server architecture with an integrated AI orchestration layer:

1. **Frontend (React):** Provides an interactive UI for chat, problem viewing, and code submission.  
2. **Backend (Node.js + Express):** Handles routing, logic, and integration with external APIs.  
3. **LLM API (OpenRouter/GPT):** The core intelligence engine for generating explanations and problems.  
4. **RAG Layer:** Ensures accuracy by grounding AI responses in verified DSA pedagogical context.  

---

## ⚙️ Key Features

- 🧠 **AI Chat Tutor:** Ask any DSA question in natural language and receive structured, step-by-step conceptual explanations.  
- 📚 **Dynamic Problem Generator:** Generates on-demand coding problems (Arrays, Stacks, Queues, etc.) with adjustable difficulty levels.  
- ⚙️ **Code Evaluation Engine:** Evaluates Java solutions, validates structure, and suggests optimizations in real-time.  
- 🔍 **RAG-Powered Intelligence:** Context-aware responses using retrieval-augmented generation to reduce hallucinations.  

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite), HTML5, CSS3 |
| **Backend** | Node.js, Express.js |
| **AI Layer** | OpenRouter / GPT APIs, RAG Architecture |
| **Logic** | Prompt Engineering, Java Code Evaluation |

---

## 📁 Project Structure

```text
AI-LEARNING-ASSISTANT/
│
├── ai-learning-backend/
│   ├── config/              # Configuration (DB, API keys)
│   ├── controllers/         # Request handlers
│   ├── routes/              # API endpoints
│   ├── services/            # AI & Java evaluation logic
│   ├── server.js            # Entry point
│   ├── .env                 # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/                 # React components & hooks
│   ├── public/              # Static assets
│   ├── package.json
│   └── .gitignore
│
└── README.md
