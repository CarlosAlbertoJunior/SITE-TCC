import React from 'react';
import "./Home.css";
import Video from "../imagem/HOME/video.mp4";

const Home = () => {
    return (
        <body>
            <section className="home">
                <div className="texto-home"></div>
                <div className="imagem-home">
                    <video
                        width="1200"
                        height="auto"
                        autoPlay
                        muted
                        aria-label="Vídeo de eventos de cosplay"
                    >
                        <source src={Video} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            </section>
        </body>
    );
};

export default Home;
