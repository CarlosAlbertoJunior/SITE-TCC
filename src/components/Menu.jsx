import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false); // Controla se o menu está aberto ou fechado

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuActive(!menuActive); // Alterna entre abrir e fechar o menu
  };

  // Função para fechar o menu após clicar em um item
  const closeMenu = () => {
    setMenuActive(false); // Fecha o menu
  };

  return (
    <nav>
      {/* Botão de Menu para mobile */}
      <button
        className={`menu-toggle ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        Menu
      </button>

      {/* Menu Desktop (apenas visível em telas grandes) */}
      <ul className="desktop-menu">
        <li><Link to="/" onClick={closeMenu}>Início</Link></li>
        <li><Link to="/vereadores" onClick={closeMenu}>Vereadores</Link></li>
        <li><Link to="/prefeitura" onClick={closeMenu}>Prefeitura</Link></li>
        <li><Link to="/forum" onClick={closeMenu}>Fórum</Link></li>
        <li><Link to="/quemsomos" onClick={closeMenu}>Quem somos</Link></li>
      </ul>

      {/* Menu Mobile (apenas visível em telas pequenas) */}
      <ul className={`mobile-menu ${menuActive ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Início</Link></li>
        <li><Link to="/vereadores" onClick={closeMenu}>Vereadores</Link></li>
        <li><Link to="/prefeitura" onClick={closeMenu}>Prefeitura</Link></li>
        <li><Link to="/forum" onClick={closeMenu}>Fórum</Link></li>
        <li><Link to="/quemsomos" onClick={closeMenu}>Quem somos</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
