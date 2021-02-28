import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
// App deve ser puxado de acordo com a pagina do exercicio
// para poder visualizá-los
import App from "./formularios/checkbox";

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);
