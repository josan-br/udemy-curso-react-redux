import React, { Component } from "react";
import "./Contador.css";

import Display from "./Display";
import Buttons from "./Buttons";
import PassoForm from "./Passo";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (passo) => this.setState({ passo });

  render() {
    return (
      <div id="contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Buttons incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}

export default Contador;
