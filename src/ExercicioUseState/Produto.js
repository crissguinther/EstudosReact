import React from "react";

const Produto = (props) => {
  return (
    <div>
      <button key={props.nome} onClick={props.handleClick}>
        {props.nome}
      </button>
    </div>
  );
};

export default Produto;
