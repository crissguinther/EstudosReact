import React from "react";

const Produto = ({ produto }) => {
  return (
    <>
      <h3>{produto.nome}</h3>
      {produto.propriedades.map((prop) => {
        return <li key={prop}>{prop}</li>;
      })}
    </>
  );
};

export default Produto;
