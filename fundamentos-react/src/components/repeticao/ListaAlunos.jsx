import React from "react";
import alunos from "../../data/alunos";

export default () => {
  const itemsAluno = alunos.map((aluno) => (
    <li key={aluno.id}>{`${aluno.id}) ${aluno.nome} -> ${aluno.nota}`} </li>
  ));
  
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{itemsAluno}</ul>
    </div>
  );
};
