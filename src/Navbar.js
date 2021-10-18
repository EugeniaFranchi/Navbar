import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import Counter from "./Conter";
import Form from "./Form";

export default function Navbar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/App">App</Link>
          </li>
          <li>
            <Link to="/Hello">Hello</Link>
          </li>
          <li>
            <Link to="/Conter">Counter</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/App">
            <App />
          </Route>
          <Route path="/Hello">
            <Hello />
          </Route>
          <Route path="/Conter">
            <Counter />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
