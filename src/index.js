import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// App deve ser puxado de acordo com a pagina do exercicio
// para poder visualizá-los
import App from "./customHooks";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
