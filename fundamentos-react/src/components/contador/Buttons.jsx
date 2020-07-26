import React from "react";

function Buttons(props) {
  const { incrementar, decrementar } = props;
  
  return (
    <div>
      <button onClick={incrementar}> + </button>
      <button onClick={decrementar}> - </button>
    </div>
  );
}

export default Buttons;
