import React, { useState } from "react";
import "./Mega.css";

function Mega(props) {
  const [qtd, setQtd] = useState(props.qtd || 6);
  const numerosIniciais = gerarNumeros(qtd);
  const [numeros, setNumeros] = useState(numerosIniciais);

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtd) {
    const numeros = Array(qtd)
      .fill(0)
      .reduce((nums) => [...nums, gerarNumeroNaoContido(1, 60, nums)], [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  function handleChange({ target }) {
    const quantidade = parseInt(target.value);
    setQtd(quantidade);
    setNumeros(gerarNumeros(quantidade));
  }

  return (
    <div id="mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label htmlFor="qtd_numeros">Quantidade de Números</label>
        <input
          type="number"
          value={qtd}
          min="6"
          max="15"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtd))}>
        Gerar Números
      </button>
    </div>
  );
}

export default Mega;
