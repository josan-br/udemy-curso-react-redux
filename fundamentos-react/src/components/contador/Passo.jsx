import React from "react";

function Passo({ passo, setPasso }) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={passo}
        onChange={(e) => setPasso(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Passo;
