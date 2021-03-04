import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "reaact-helmet";

const Home = () => {
  return (
    <div>
      {/* <Head title="React Router" description="Estudos sobre react router" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta
          name="description"
          content="Essa é a página inicial do site Dogs."
        />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a página home</p>
      <Link to="/produto/notebook">Notebook</Link>|
      <Link to="/produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
