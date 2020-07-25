import React from "react";

export default (props) => {
  const sexo = props.sexo ? "Homem" : "Mulher";
  return <p>{`${props.nome} tem ${props.idade} anos, ${sexo}`}</p>;
};
