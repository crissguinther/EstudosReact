import React from "react";

const App = () => {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  const [cores, setCores] = React.useState([]);

  const handleClick = ({ target }) => {
    if (!cores.includes(target.value)) setCores([...cores, target.value]);
    else setCores(cores.filter((cor) => cor !== target.value));
  };

  const checkCor = (cor) => cores.includes(cor);

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              value={cor}
              checked={checkCor(cor)}
              onChange={handleClick}
            />
            {cor}
          </label>
        );
      })}
      <hr />
      {cores && cores.join("\n")}
    </form>
  );
};

export default App;
