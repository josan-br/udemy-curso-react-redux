import React from "react";
import produtos from "../../data/produtos";

import "./TabelaProdutos.css";

export default () => {
  function getLinhas() {
    return produtos.map((produto, idx) => (
      <tr key={produto.id} className={idx % 2 === 0 ? "par" : "impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    ));
  }

  return (
    <div className="products_table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
