import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = (props) => {
  const global = React.useContext(GlobalContext);

  console.log(global);

  return (
    <div>
      {global.dados &&
        global.dados.map((produto, index) => (
          <h6 key={produto.nome + index}>{produto.nome}</h6>
        ))}

      <button onClick={() => global.fetchDados()}>Puxar Dados</button>

      <button onClick={() => global.limparDados()}>Limpar Dados</button>
    </div>
  );
};

export default Produto;
