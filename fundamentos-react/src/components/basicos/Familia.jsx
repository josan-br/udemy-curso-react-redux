import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {props.children.map((child, idx) => {
        return cloneElement(child, { ...props, key: idx });
      })}
    </div>
  );
};
