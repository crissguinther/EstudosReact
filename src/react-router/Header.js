import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Route changed.");
  }, [location]);

  return (
    <header>
      <nav>
        <NavLink activeStyle={{ color: "#ea5412" }} to="/" end>
          Home
        </NavLink>
        |{" "}
        <NavLink activeStyle={{ color: "#ea5412" }} to="/sobre">
          Sobre
        </NavLink>
        |{" "}
        <NavLink activeStyle={{ color: "#ea5412" }} to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
