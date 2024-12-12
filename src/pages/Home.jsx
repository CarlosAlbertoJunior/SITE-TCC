import React from "react";
import "./Home.css";
import Imagem from "../imagem/HOME/01.png"


const Home = () => {
    return (
        <body>
            <section className="inicio">
                <div>
                    <div className="texto-inicio">
                        <h1>Bem-vindo ao Portal da Transparência</h1>
                    </div>
                    <div className="imagem-inicio">
                        <img src={Imagem} alt="Apresentação" />
                    </div>
                </div>
            </section>
        </body>
    );
};

export default Home;
