import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import Counter from "./Conter";
import Form from "./Form";

const NavbarList = () => {
  const location = useLocation().pathname

  const list = () => {
    return(
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
    )
  }

  return(
    location === "/" ? list() : null
  )
};

const NavbarButton = () => {
  const location = useLocation().pathname
  return(
    location === "/" ? null : <Link to="/">Home</Link>
  )
};

export default function Navbar() {
  return (
    <Router>
      <div>
        <NavbarList />
        
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

        <NavbarButton />
      </div>
    </Router>
  );
}
