import React, { Component } from "react";

import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:8000/api/todo";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkPending = this.handleMarkPending.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.refresh(this.state.description);
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((res) => {
        this.setState({ ...this.state, description, list: res.data });
      })
      .catch((err) => console.error(err));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange({ target }) {
    this.setState({ ...this.state, [target.name]: target.value });
  }

  handleAdd() {
    const { description } = this.state;
    axios.post(URL, { description }).then((res) => this.refresh());
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((res) => this.refresh(this.state.description))
      .catch((err) => console.error(err));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((res) => this.refresh(this.state.description))
      .catch((err) => console.error(err));
  }

  handleMarkPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((res) => this.refresh(this.state.description))
      .catch((err) => console.error(err));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          handleSearch={this.handleSearch}
        />
        <TodoList
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkPending={this.handleMarkPending}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default ToDo;
