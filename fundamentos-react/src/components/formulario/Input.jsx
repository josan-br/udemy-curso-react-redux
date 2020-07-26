import React, { useState } from "react";

export default () => {
  const [valor, setValor] = useState("Inicial");

  function handleChange({ target }) {
    setValor(target.value);
  }

  return (
    <div>
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "1.4rem",
        }}
      >
        <input type="text" value={valor} onChange={handleChange} />
        <input type="text" value={valor} readOnly />
        <input type="text" value={undefined} />
      </div>
    </div>
  );
};
