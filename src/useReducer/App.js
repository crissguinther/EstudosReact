import React from "react";

import Exemplo from './Exemplo';

const reducer = (state, action) => {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "reduzir":
      return state - 1;
    default:
      throw new Error('We only accept "aumentar" or "reduzir" as parameters ');
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>Aumentar</button>
      <button onClick={() => dispatch('reduzir')}>Reduzir</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;
