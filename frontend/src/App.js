import React from "react";
import ChatBox from "./components/ChatBox";
import ProblemPanel from "./components/ProblemPanel";
import EvaluatePanel from "./components/EvaluatePanel";
import "./App.css";

function App() {
  return React.createElement(
    "div",
    { className: "app-container" },

    // Sidebar
    React.createElement(
      "div",
      { className: "sidebar" },

      React.createElement(
        "div",
        { className: "logo" },
        "AI Learning Assistant"
      ),

      React.createElement(
        "div",
        { className: "section" },
        React.createElement(ProblemPanel)
      ),

      React.createElement(
        "div",
        { className: "section" },
        React.createElement(EvaluatePanel)
      )
    ),

    // Chat Area
    React.createElement(
      "div",
      { className: "chat-container" },

      React.createElement(
        "div",
        { className: "chat-header" },
        React.createElement("h2", null, "DSA AI Tutor"),
        React.createElement(
          "p",
          null,
          "Ask anything • Learn • Practice • Evaluate"
        )
      ),

      React.createElement(ChatBox)
    )
  );
}

export default App;