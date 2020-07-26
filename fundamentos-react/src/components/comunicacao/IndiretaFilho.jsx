import React from "react";

export default ({ quandoClicar }) => {
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <p>Filho</p>
      <button onClick={(e) => quandoClicar("João", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};
