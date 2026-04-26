import React from "react";

function Message(props) {
  const msg = props.msg;

  return React.createElement(
    "div",
    { className: "message " + msg.type },
    msg.text
  );
}

export default Message;