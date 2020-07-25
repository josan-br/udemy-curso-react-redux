import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  let nome = "?";
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;
    
    console.log(nomeParam, idadeParam, nerdParam);
  }

  return (
    <div>
      <p>{`${nome} tem ${idade} anos, ${nerd ? "é nerd" : "não é nerd"}`}</p>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
