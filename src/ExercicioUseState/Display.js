import React from "react";

const Display = ({ product }) => {
  return (
    <div>
      {console.log(product)}
      <h3>{product.nome}</h3>
      {product.fotos.map((foto) => (
        <img src={foto["src"]} key={foto["titulo"]} alt={foto["titulo"]}></img>
      ))}
      <h2>R${product.preco}</h2>
      <p>{product.descricao}</p>
    </div>
  );
};

export default Display;
