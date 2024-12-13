import React, { useState, useEffect } from "react";
import axios from "axios"; // Importando axios
import "./Forum.css";

const Forum = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [opinion, setOpinion] = useState("");
  const [reply, setReply] = useState("");
  const [opinions, setOpinions] = useState([]);

  // Carregar opiniões ao inicializar o componente
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/opinions") // Substitua pela URL correta da API
      .then((response) => {
        setOpinions(response.data); // Armazenar as opiniões na variável de estado
      })
      .catch((error) => {
        console.error("Erro ao carregar opiniões:", error);
      });
  }, []); // O array vazio garante que isso ocorra apenas uma vez, quando o componente for montado

  const handleNameChange = (e) => setName(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleInputChange = (e) => setOpinion(e.target.value);
  const handleReplyChange = (e) => setReply(e.target.value);

  const handleSendOpinion = () => {
    if (name.trim() !== "" && title.trim() !== "" && opinion.trim() !== "") {
      const newOpinion = {
        user: name,
        title,
        text: opinion,
        replies: [],
        isReplying: false,
      };

      axios
        .post("http://localhost:5000/api/opinions", newOpinion) // Substitua pela URL da API para criação de novas opiniões
        .then((response) => {
          setOpinions([...opinions, response.data]); // Adicionar a nova opinião ao estado
          setName("");
          setTitle("");
          setOpinion("");
        })
        .catch((error) => {
          console.error("Erro ao enviar opinião:", error);
        });
    } else {
      alert("Por favor, insira seu nome, título do assunto e a sua opinião.");
    }
  };

  const handleSendReply = (opIndex) => {
    if (reply.trim() !== "") {
      const newReply = {
        user: name,
        text: reply,
        likes: 0,
        likedBy: [],
      };

      const updatedOpinion = { ...opinions[opIndex] };
      updatedOpinion.replies.push(newReply);

      axios
        .put(`http://localhost:5000/api/opinions/${updatedOpinion.id}`, updatedOpinion) // Substitua pela URL da API para adicionar respostas
        .then((response) => {
          const updatedOpinions = [...opinions];
          updatedOpinions[opIndex] = response.data;
          setOpinions(updatedOpinions);
          setReply("");
        })
        .catch((error) => {
          console.error("Erro ao enviar resposta:", error);
        });
    } else {
      alert("Por favor, insira sua resposta.");
    }
  };

  const handleDeleteReply = (opIndex, replyIndex) => {
    if (opinions[opIndex].replies[replyIndex].user === name) {
      axios
        .delete(
          `http://localhost:5000/api/opinions/${opinions[opIndex].id}/replies/${replyIndex}` // Substitua pela URL da API para deletar resposta
        )
        .then(() => {
          const newOpinions = [...opinions];
          newOpinions[opIndex].replies.splice(replyIndex, 1);
          setOpinions(newOpinions);
        })
        .catch((error) => {
          console.error("Erro ao apagar resposta:", error);
        });
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

    if (!reply.likedBy.includes(name)) {
      reply.likedBy.push(name);
      reply.likes += 1;

      axios
        .put(
          `http://localhost:5000/api/opinions/${opinions[opIndex].id}`, // Substitua pela URL da API para atualizar a opinião
          newOpinions[opIndex]
        )
        .then(() => {
          setOpinions(newOpinions);
        })
        .catch((error) => {
          console.error("Erro ao curtir resposta:", error);
        });
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

      {/* Exibir mensagens enviadas na parte superior */}
      <div className="opinions">
        {opinions.map((op, opIndex) => (
          <div className="opinion" key={opIndex}>
            <strong>{op.user} - {op.title}:</strong> {op.text}

            <div className="replies">
              {op.replies.map((reply, replyIndex) => (
                <div className="reply" key={replyIndex}>
                  <strong>{reply.user}:</strong> {reply.text}
                  <button
                    onClick={() => handleLikeReply(opIndex, replyIndex)}
                    className="like-btn"
                  >
                    Curtir ({reply.likes})
                  </button>
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

      {/* Formulário de envio na parte inferior */}
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
