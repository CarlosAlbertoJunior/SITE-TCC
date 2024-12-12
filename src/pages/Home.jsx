import React from "react";
import "./Home.css";
import Imagem from "../imagem/HOME/01.png"


const Home = () => {
    return (
        <body>
            <section className="home">
                <div className="texto-home">
                    <h1>Bem-vindo ao Portal da Transparência</h1>
                </div>
                <div className="imagem-home">
                    <img src={Imagem} alt="Apresentação" />
                </div>
            </section>
        </body>
    );
};

export default Home;
