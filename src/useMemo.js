import React from "react";

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  //   const valor = React.useMemo(() => {
  //     const localItem = window.localStorage.getItem("preferido");
  //     console.log("Aconteceu o memo");
  //     return localItem;
  //   }, []);
  //   console.log(valor);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;