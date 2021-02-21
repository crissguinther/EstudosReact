import React from "react";

const Produto = ({ produto }) => {
  if (produto === null) return null;
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R${produto.preco}</p>
    </div>
  );
};

export default Produto;
