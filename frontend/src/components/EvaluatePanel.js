import React, { useState } from "react";
import axios from "axios";

function EvaluatePanel() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const evaluate = async () => {
    try {
      const res = await axios.post("http://localhost:5000/evaluate", {
        code: code,
      });

      setResult(res.data.evaluation);
    } catch (err) {
      setResult("Error evaluating code");
    }
  };

  return React.createElement(
    "div",
    null,

    React.createElement("textarea", {
      rows: 5,
      placeholder: "Paste your code...",
      value: code,
      onChange: (e) => setCode(e.target.value),
    }),

    React.createElement(
      "button",
      { className: "evaluate-btn", onClick: evaluate },
      "Evaluate Code"
    ),

    result &&
      React.createElement(
        "div",
        { className: "output" },
        result
      )
  );
}

export default EvaluatePanel;