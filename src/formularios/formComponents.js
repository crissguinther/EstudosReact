import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("vermelho");
  const [linguagens, setLinguagens] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Radio Buttons</h2>
      <Radio options={["vermelho", "azul"]} value={cor} setValue={setCor} />
      {cor && <p>Sua cor preferida é: {cor}</p>}
      <hr />
      <h2>Text alike inputs</h2>
      <Input id="nome" label="nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <hr />
      <h2>Select inputs</h2>
      <Select
        options={["Tablet", "Smartphone"]}
        setValue={setProduto}
        value={produto}
      />
      {produto && <p>Seu produto escolhido é: {produto}</p>}
      <hr />
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "Ruby", "PHP"]}
        values={linguagens}
        setValues={setLinguagens}
      />
      {linguagens.length > 0 && (
        <p>Sua(s) linguagem(ns) é/são: {linguagens.join(",")}</p>
      )}
      <hr />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
