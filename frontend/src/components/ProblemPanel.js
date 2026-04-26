import React, { useState } from "react";
import axios from "axios";

function ProblemPanel() {
  const [problem, setProblem] = useState("");

  const getProblem = async () => {
    try {
      const res = await axios.get("http://localhost:5000/problem");
      setProblem(res.data.problem);
    } catch (err) {
      setProblem("Error fetching problem");
    }
  };

  return React.createElement(
    "div",
    null,

    React.createElement(
      "button",
      { className: "problem-btn", onClick: getProblem },
      "Get Problem"
    ),

    problem &&
      React.createElement(
        "div",
        { className: "output" },
        problem
      )
  );
}

export default ProblemPanel;