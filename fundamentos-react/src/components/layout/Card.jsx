import React from "react";
import "./Card.css";

export default (props) => {
  const { titulo, children } = props;
  return (
    <div className="card">
      <div className="card_title">{titulo}</div>
      <div className="card_content">{children}</div>
    </div>
  );
};
