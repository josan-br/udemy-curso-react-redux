import React from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

export default (props) => (
  <HashRouter>
    <Switch>
      <Route path="/todo" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todo" />
    </Switch>
  </HashRouter>
);
