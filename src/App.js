import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/cart" exact component={Cart} />
  </Router>
);

export default App;
