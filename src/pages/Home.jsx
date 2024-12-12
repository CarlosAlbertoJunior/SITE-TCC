import React, { useState } from 'react';
import "./Home.css";
import Imagem from "../imagem/HOME/01.png"
import Video from "../imagem/HOME/video.mp4"


const Home = () => {
    const [videoEnded, setVideoEnded] = useState(false); // Estado para verificar se o vídeo acabou

    const handleVideoEnd = () => {
        setVideoEnded(true); // Quando o vídeo acabar, o estado `videoEnded` é definido como true
    };

    return (
        <body>
            <section className="home">
                <div className="texto-home">

                </div>
                <div className="imagem-home">
                    {/* Vídeo */}
                    {!videoEnded ? (
                        <video
                            width="1200"
                            height="auto"
                            autoPlay
                            muted // Adicione `muted` se necessário, pois muitos navegadores bloqueiam autoplay de vídeos com som.
                            onEnded={handleVideoEnd}
                            aria-label="Vídeo de eventos de cosplay"
                        >
                            <source src={Video} type="video/mp4" /> {/* Certifique-se de informar o tipo correto */}
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    ) : (
                        <img src={Imagem} alt="Apresentação" />
                    )}


                </div>
            </section>
        </body>
    );
};

export default Home;
