import React from "react";
const Display = ({ activeProduct, loading }) => {
  <section>
    {loading && !activeProduct && (
      <div>
        <p>Carregando...</p>
      </div>
    )}
    {!loading &&
      activeProduct.map((product) => {
        return <div>{console.log(activeProduct)}</div>;
      })}
  </section>;
};

export default Display;
