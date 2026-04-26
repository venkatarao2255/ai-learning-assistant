import React, { useState } from "react";

function InputBox(props) {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input) return;
    props.sendMessage(input);
    setInput("");
  };

  return React.createElement(
    "div",
    { className: "input-box" },

    React.createElement("input", {
      value: input,
      onChange: (e) => setInput(e.target.value),
      placeholder: "Ask something...",
    }),

    React.createElement(
      "button",
      { onClick: send },
      "Send"
    )
  );
}

export default InputBox;