import React from 'react';
import "./Home.css";
import Video from "../imagem/HOME/video.mp4";

const Home = () => {
    return (
        <body>
            <section className="home">

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
            <section className='texto'>
                <div className="texto-home">
                    Bem-vindo ao <b>Tô de Olho</b>, o seu portal de transparência e fiscalização da gestão pública. Nosso objetivo é proporcionar à população acesso fácil e claro a informações essenciais sobre as ações dos vereadores, os gastos da prefeitura e a utilização dos recursos públicos.

                    Aqui você encontrará dados atualizados sobre o desempenho dos vereadores na Câmara Municipal, acompanhando de perto suas atividades, propostas e decisões. Além disso, disponibilizamos informações detalhadas sobre as despesas da prefeitura, incluindo viagens oficiais, contratos firmados e muito mais.

                    Acreditamos que a transparência é a chave para uma gestão pública eficiente e responsável. Buscamos empoderar os cidadãos, oferecendo dados acessíveis e de fácil compreensão para que todos possam fiscalizar como os recursos estão sendo utilizados. Afinal, o dinheiro público é de todos, e é nosso dever acompanhar de perto as ações dos nossos representantes.

                    Acompanhe, informe-se e participe ativamente da construção de uma cidade mais transparente e justa. <b>Estamos de olho, para que você também esteja!</b>
                </div>
            </section>
        </body>
    );
};

export default Home;
