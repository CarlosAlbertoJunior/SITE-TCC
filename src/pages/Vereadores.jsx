import React, { useEffect, useState } from "react";
import "./Vereadores.css";

const Vereadores = () => {
  const [vereadores, setVereadores] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vereadores"); // Substitua pelo endpoint real
        const data = await response.json();
        setVereadores(data);
      } catch (error) {
        console.error("Erro ao buscar os dados dos vereadores: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="vereadores">
      <div className="vereadores-texto">
        <h1>Dados dos Vereadores</h1>
        <p>Confira informações detalhadas sobre os vereadores.</p>
      </div>
      <div className="vereadores-grid">
        {vereadores.map((vereador) => (
          <div className="vereador-card" key={vereador.id}>
            <img src={vereador.foto} alt={vereador.nome} className="vereador-foto" />
            <h3>{vereador.nome}</h3>
            <p><strong>Descrição:</strong> {vereador.descricao}</p>
            <p><strong>Email:</strong> {vereador.email}</p>
            <p><strong>Telefone:</strong> {vereador.telefone}</p>
            <p><strong>Gabinete:</strong> {vereador.gabinete}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vereadores;
