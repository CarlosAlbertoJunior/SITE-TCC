import React, { useState } from "react";
import "./Forum.css";

const Forum = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [opinion, setOpinion] = useState("");
  const [reply, setReply] = useState("");
  const [opinions, setOpinions] = useState([
    {
      user: "João",
      title: "Fórum incrível",
      text: "Adorei a ideia do fórum! Muito bom poder expressar minha opinião.",
      replies: [
        {
          user: "Maria",
          text: "Concordo, ótimo fórum!",
          likes: 3,
          likedBy: [], // Array de usuários que curtiram
        }
      ],
      isReplying: false,
    },
    {
      user: "Maria",
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
      newOpinions[index].replies.push({ user: name, text: reply, likes: 0, likedBy: [] });
      setOpinions(newOpinions);
      setReply(""); // Limpa o campo de resposta
    } else {
      alert("Por favor, insira sua resposta.");
    }
  };

  const handleDeleteReply = (opIndex, replyIndex) => {
    if (opinions[opIndex].replies[replyIndex].user === name) {
      const newOpinions = [...opinions];
      newOpinions[opIndex].replies.splice(replyIndex, 1);
      setOpinions(newOpinions);
    } else {
      alert("Você só pode apagar suas próprias respostas.");
    }
  };

  const handleToggleReply = (index) => {
    const newOpinions = [...opinions];
    newOpinions[index].isReplying = !newOpinions[index].isReplying;
    setOpinions(newOpinions);
  };

  const handleLikeReply = (opIndex, replyIndex) => {
    const newOpinions = [...opinions];
    const reply = newOpinions[opIndex].replies[replyIndex];

    // Verifica se o usuário já curtiu a resposta
    if (!reply.likedBy.includes(name)) {
      reply.likedBy.push(name); // Adiciona o nome do usuário que curtiu
      reply.likes += 1; // Incrementa o contador de curtidas
      setOpinions(newOpinions);
    } else {
      alert("Você já curtiu esta resposta.");
    }
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
          {opinions.map((op, opIndex) => (
            <div className="opinion" key={opIndex}>
              <strong>{op.user} - {op.title}:</strong> {op.text}

              {/* Exibir respostas */}
              <div className="replies">
                {op.replies.map((reply, replyIndex) => (
                  <div className="reply" key={replyIndex}>
                    <strong>{reply.user}:</strong> {reply.text}

                    {/* Botão de curtir */}
                    <button
                      onClick={() => handleLikeReply(opIndex, replyIndex)}
                      className="like-btn"
                    >
                      Curtir ({reply.likes})
                    </button>

                    {/* Exibir o botão de excluir apenas para o autor da resposta */}
                    {reply.user === name && (
                      <button
                        onClick={() => handleDeleteReply(opIndex, replyIndex)}
                        className="delete-reply-btn"
                      >
                        Apagar
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                className="reply-btn"
                onClick={() => handleToggleReply(opIndex)}
              >
                Responder
              </button>

              {op.isReplying && (
                <div className="reply-input-container">
                  <textarea
                    className="reply-input"
                    placeholder="Responda esta opinião..."
                    value={reply}
                    onChange={handleReplyChange}
                  ></textarea>
                  <button
                    onClick={() => handleSendReply(opIndex)}
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
