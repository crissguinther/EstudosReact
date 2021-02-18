// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from "react";
import Display from "./ExercicioUseState/Display";
import Produto from "./ExercicioUseState/Produto";

const App = () => {
  const products = ["tablet", "smartphone", "notebook"];
  const [activeProduct, setActiveProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function fetchProduct(event) {
    const productName = event.target.innerText;
    setLoading(true);
    const response = await window.fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`
    );
    const productBody = await response.text();
    setActiveProduct(productBody);

    setLoading(false);
  }

  return products.map((produto) => {
    return (
      <>
        <Produto
          style={{
            display: "inline-block",
            padding: "5px",
            backgroundColor: "#0EAD52",
          }}
          nome={produto.slice(produto.lastIndexOf("/") + 1, produto.length + 1)}
          key={produto.nome}
          handleClick={fetchProduct}
        />
        {!loading && (
          <Display activeProduct={activeProduct} loading={loading} />
        )}
      </>
    );
  });
};

export default App;
