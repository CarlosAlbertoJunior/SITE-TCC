import React, { useState } from "react";
import "./Forum.css";

const Forum = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [opinion, setOpinion] = useState("");
  const [reply, setReply] = useState("");
  const [opinions, setOpinions] = useState([
    {
      user: "Pedro",
      title: "Fórum incrível",
      text: "Adorei a ideia do fórum! Muito bom poder expressar minha opinião.",
      replies: [],
      isReplying: false, // Estado para controle da exibição do campo de resposta
    },
    {
      user: "Cloud",
      title: "Apoio total",
      text: "Excelente iniciativa, é importante dar voz às pessoas.",
      replies: [],
      isReplying: false,
    },
  ]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSendOpinion = () => {
    if (name.trim() !== "" && title.trim() !== "" && opinion.trim() !== "") {
      setOpinions([
        ...opinions,
        { user: name, title, text: opinion, replies: [], isReplying: false },
      ]);
      setName("");
      setTitle("");
      setOpinion("");
    } else {
      alert("Por favor, insira seu nome, título do assunto e a sua opinião.");
    }
  };

  const handleSendReply = (index) => {
    if (reply.trim() !== "") {
      const newOpinions = [...opinions];
      newOpinions[index].replies.push({ user: name, text: reply });
      setOpinions(newOpinions);
      setReply(""); // Limpa o campo de resposta
    } else {
      alert("Por favor, insira sua resposta.");
    }
  };

  const handleToggleReply = (index) => {
    const newOpinions = [...opinions];
    newOpinions[index].isReplying = !newOpinions[index].isReplying; // Alterna a visibilidade do campo de resposta
    setOpinions(newOpinions);
  };

  return (
    <section className="forum">
      <div className="forum-texto">
        <h1>Fórum de Discussão</h1>
        <p>Participe dos debates e compartilhe sua opinião!</p>
      </div>

      <div className="forum-box">
        <div className="input-container">
          <input
            type="text"
            className="name-input"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="input-container">
          <input
            type="text"
            className="title-input"
            placeholder="Título do assunto"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="opinions">
          {opinions.map((op, index) => (
            <div className="opinion" key={index}>
              <strong>{op.user} - {op.title}:</strong> {op.text}

              {/* Exibir respostas */}
              <div className="replies">
                {op.replies.map((reply, replyIndex) => (
                  <div className="reply" key={replyIndex}>
                    <strong>{reply.user}:</strong> {reply.text}
                  </div>
                ))}
              </div>

              {/* Botão para exibir o campo de resposta */}
              <button
                className="reply-btn"
                onClick={() => handleToggleReply(index)}
              >
                Responder
              </button>

              {/* Campo de resposta, visível apenas quando isReplying for true */}
              {op.isReplying && (
                <div className="reply-input-container">
                  <textarea
                    className="reply-input"
                    placeholder="Responda esta opinião..."
                    value={reply}
                    onChange={handleReplyChange}
                  ></textarea>
                  <button
                    onClick={() => handleSendReply(index)}
                    className="send-reply-btn"
                  >
                    Enviar Resposta
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="input-container">
          <textarea
            className="opinion-input"
            placeholder="Deixe sua opinião..."
            value={opinion}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleSendOpinion} className="send-btn">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Forum;
