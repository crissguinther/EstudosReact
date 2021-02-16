import React from "react";
import Link from "./Link.js";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link url="/" text="Home" />
        <Link url="produtos" text="Produtos" />
      </ul>
    </nav>
  );
};

export default Header;
