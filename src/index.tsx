import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Home from "./components/Home";

const App: React.FC = () => <Home />;

ReactDOM.render(<App />, document.querySelector("#root"));
