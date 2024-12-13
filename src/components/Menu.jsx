import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false); // Controla se o menu está aberto ou fechado
  const menuRef = useRef(null); // Referência para o menu

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuActive(!menuActive); // Alterna entre abrir e fechar o menu
  };

  // Função para fechar o menu após clicar em um item ou no botão de fechar
  const closeMenu = () => {
    setMenuActive(false); // Fecha o menu
  };

  // Fechar o menu ao clicar fora dele
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuActive(false); // Fecha o menu
    }
  };

  // Usar useEffect para adicionar o ouvinte de evento
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Remover o ouvinte de evento quando o componente for desmontado
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
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
        {/* Botão de fechar no menu mobile */}
        <button className="close-menu" onClick={closeMenu}>
          Fechar
        </button>

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
