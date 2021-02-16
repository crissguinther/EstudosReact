// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from "react";
import Header from "./DesafioComponents/Header.js";
import Produto from "./DesafioComponents/Produto.js";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];
const { pathname } = window.location;

const App = () => {
  if (pathname == "/")
    return (
      <section>
        <Header />
        <h1>Home</h1>
        <p>Essa é a home de produtos</p>
      </section>
    );
  else
    return (
      <section>
        <Header />
        {produtos.map((produto) => {
          return <Produto produto={produto} />;
        })}
      </section>
    );
};

export default App;
