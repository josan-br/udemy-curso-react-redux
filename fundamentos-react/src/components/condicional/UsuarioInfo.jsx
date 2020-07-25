import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nom}</strong>
        <Else>
          <strong>Seja bem vindo</strong>
        </Else>
      </If>
    </div>
  );
};
