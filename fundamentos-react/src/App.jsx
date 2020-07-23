import React from "react";
import './App.css';

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <div className="cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parâmetro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  </div>
);
