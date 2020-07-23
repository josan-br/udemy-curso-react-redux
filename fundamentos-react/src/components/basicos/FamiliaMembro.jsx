import React from "react";

export default ({ nome, sobrenome }) => {
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
};
