import React from "react";
import Produto from "./Produto";

const App = () => {
  const [ativar, setAtivar] = React.useState(true);

  return (
    <div>
      {ativar && <Produto titulo="Esse é meu produto" />}
      <button onClick={() => setAtivar(!ativar)}>Exibir/Ocultar</button>
    </div>
  );
};

export default App;
