import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.addDigit = this.addDigit.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }
  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      
      const arrayOperations = {
        "+": values[0] + values[1],
        "-": values[0] - values[1],
        "*": values[0] * values[1],
        "/": values[0] / values[1],
      };

      values[0] = arrayOperations[currentOperation];
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  addDigit(n) {
    const { displayValue, clearDisplay, current } = this.state;

    if (n === "." && displayValue.includes(".")) return;

    const isClearDisplay = displayValue === "0" || clearDisplay;
    const currentValue = isClearDisplay ? "" : displayValue;
    const newDisplayValue = currentValue + n;

    this.setState({ displayValue: newDisplayValue, clearDisplay: false });

    if (n !== ".") {
      const i = current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label={"AC"} click={this.clearMemory} triple />
        <Button label={"/"} click={this.setOperation} operation />
        <Button label={"7"} click={this.addDigit} />
        <Button label={"8"} click={this.addDigit} />
        <Button label={"9"} click={this.addDigit} />
        <Button label={"*"} click={this.setOperation} operation />
        <Button label={"4"} click={this.addDigit} />
        <Button label={"5"} click={this.addDigit} />
        <Button label={"6"} click={this.addDigit} />
        <Button label={"-"} click={this.setOperation} operation />
        <Button label={"3"} click={this.addDigit} />
        <Button label={"2"} click={this.addDigit} />
        <Button label={"1"} click={this.addDigit} />
        <Button label={"+"} click={this.setOperation} operation />
        <Button label={"0"} click={this.addDigit} double />
        <Button label={"."} click={this.addDigit} />
        <Button label={"="} click={this.setOperation} operation />
      </div>
    );
  }
}

export default Calculator;
