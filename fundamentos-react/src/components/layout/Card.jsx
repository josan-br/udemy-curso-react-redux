import React from "react";
import "./Card.css";

export default (props) => {
  const { color, titulo, children } = props;

  const cardStyle = {
    backgroundColor: color || "#F00",
    borderColor: color || "#F00",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card_title">{titulo}</div>
      <div className="card_content">{children}</div>
    </div>
  );
};
