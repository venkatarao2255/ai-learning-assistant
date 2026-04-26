import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import InputBox from "./InputBox";

function ChatBox() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { type: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: text,
      });

      const botMsg = { type: "bot", text: res.data.reply };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error connecting to backend" },
      ]);
    }
  };

  return React.createElement(
    React.Fragment,
    null,

    React.createElement(
      "div",
      { className: "messages" },
      messages.map((msg, i) =>
        React.createElement(Message, { key: i, msg: msg })
      )
    ),

    React.createElement(InputBox, { sendMessage: sendMessage })
  );
}

export default ChatBox;