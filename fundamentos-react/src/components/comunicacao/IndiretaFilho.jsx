import React from "react";

export default (props) => {
  return (
    <div>
      <p>Filho</p>
      <button onClick={(e) => props.quandoClicar("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
