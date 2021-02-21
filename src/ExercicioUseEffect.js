import React from "react";
import Produto from "./ExercicioUseEffect/Produto";

const App = () => {
  const products = ["notebook", "smartphone"];
  const preferido = window.localStorage.getItem("preferido") || "null";
  const [activeProduct, setActiveProduct] = React.useState(null);

  // Function that will fetch the product
  async function fetchProduct(productName) {
    let response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`
    );
    let product = await response.json();
    return product;
  }

  // Function that will be activated on a click event
  async function handleClick(event) {
    let productName = event.target.innerText;
    let product = fetchProduct(productName);
    window.localStorage.setItem("preferido", productName);
    setActiveProduct(product);
  }

  // Function that will run on render
  React.useEffect(() => {
    if (preferido !== "null")
      fetchProduct(preferido).then((product) => setActiveProduct(product));
  }, [preferido, activeProduct]);

  return (
    <section>
      <h1>Preferência: {preferido !== "null" ? preferido : ""}</h1>
      {products.map((product) => (
        <button key={product} onClick={handleClick}>
          {product}
        </button>
      ))}
      {activeProduct && <Produto produto={activeProduct} />}
    </section>
  );
};

export default App;
