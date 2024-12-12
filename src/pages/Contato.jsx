import React from "react";

const Contato = () => {
  return (
    <section>
      <h1>Entre em Contato</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
