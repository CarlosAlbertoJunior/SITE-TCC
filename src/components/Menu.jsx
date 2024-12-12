import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/vereadores">Vereadores</Link></li>
        <li><Link to="/prefeitura">Prefeitura</Link></li>
        <li><Link to="/forum">Fórum</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
