import React from "react";
import "./Button.css";

function Button(props) {
  const { label, operation, double, triple, click } = props;

  let classes = "button";
  classes += operation ? " button-operation" : "";
  classes += double ? " button-double" : "";
  classes += triple ? " button-triple" : "";

  return (
    <button className={classes} onClick={(e) => click(label)}>
      {label}
    </button>
  );
}

export default Button;
