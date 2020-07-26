import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <p>{`${nome} tem ${idade} anos, ${nerd ? "é nerd" : "não é nerd"}`}</p>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
