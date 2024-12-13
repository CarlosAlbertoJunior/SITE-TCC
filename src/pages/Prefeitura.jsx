import React, { useEffect, useState } from "react";
import "./Prefeitura.css";

const Prefeitura = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/contratos"); // Substitua pelo endpoint real
        const data = await response.json();
        setContratos(data);
      } catch (error) {
        console.error("Erro ao buscar os dados dos contratos: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="prefeitura">
      <div className="prefeitura-texto">
        <h1>Contratos da Prefeitura</h1>
        <p>Confira informações detalhadas sobre os contratos da prefeitura.</p>
      </div>
      <div className="contratos-grid">
        {contratos.map((contrato) => (
          <div className="contrato-card" key={contrato.id}>
            <h3>{contrato.titulo}</h3>
            <p><strong>Descrição:</strong> {contrato.descricao}</p>
            <p><strong>Valor:</strong> R$ {contrato.valor}</p>
            <p><strong>Data:</strong> {contrato.data}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prefeitura;
