import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Home from "./components/Home";

const App = () => <Home />;

ReactDOM.render(<App loading />, document.querySelector("#root"));
