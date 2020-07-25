import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} sexo={true} />
      <DiretaFilho nome="Gabriela" idade={17} sexo={false} />
    </div>
  );
};
