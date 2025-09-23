import React from "react";
import { useState, useEffect } from "react";
import video1 from "../../public/matrimonioVideo1.mp4";
import image1 from "../../public/image1.png";
import imageIglesia from "../../public/iglesia.png";
import imageCopas from "../../public/copas.png";
import avanceGif from "../../public/avance.gif";
import imageDressCode from "../../public/dressCode.png";
import Countdown from "./Countdown.jsx";
import CalendarButton from "./CalendarButton.jsx"

const Home = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".cardInfo");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.10 } // activa cuando el 10% de la card sea visible
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="header-linea"></div>
      {/* Video */}
      <div className="div-video">
        <video src={video1} controls playsInline />
        <img className="gif" src={avanceGif}/>
      </div>
      {/* seccion 1, nos casamos */}
      
      <img className="header-image1" src={image1} alt="" />
      <div className="cardInfo">
        <h2 className="cardInfo-poema">¡Nos Casamos!</h2>
        <p className="poem">
          En medio de tantos latidos encontramos el nuestro, un amor que no
          conoce fronteras ni tiempo. Hoy elegimos unir nuestras vidas, caminar
          hacia un mismo horizonte y celebrar la eternidad que empieza en este
          instante.
          <br />
          <br />
          Con el corazón rebosante de alegría, te invitamos a ser parte de
          nuestro día más especial.
        </p>
      </div>

      {/* seccion 2, fecha y hora */}

      <div className="cardInfo">
        <h2 className="cardInfo-hora">1 de Noviembre, 2025</h2>
        <Countdown />
        <CalendarButton/>
      </div>

      {/* seccion 3, ceremonia  */}

      <div className="cardInfo">
        <h2 className="cardInfo-poema">Ceremonia</h2>
        <img className="imgIglesia" src={imageIglesia} alt="" />
        <div className="cardInfo-direccion">
          <p>Zafar Eventos</p>
          <p>Km 10 Autopista vía Floridablanca - Piedecuesta</p>
          <p>Piedecuesta, Santander</p>
        </div>
        <p className="cardInfo-horaCeremonia">03:00 PM</p>
        <a
          href="https://maps.app.goo.gl/QdTKbAiPitVPYaDt9"
          className="comoLlegar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo Llegar
        </a>
      </div>

      {/* seccion 4, recepcion  */}

      <div className="cardInfo">
        <h2 className="cardInfo-poema">Recepción</h2>
        <img className="imgCopas" src={imageCopas} alt="" />
        <div className="cardInfo-direccion">
          <p>Zafar Eventos</p>
          <p>Km 10 Autopista vía Floridablanca - Piedecuesta</p>
          <p>Piedecuesta, Santander</p>
        </div>
        <p className="cardInfo-horaCeremonia">05:00 PM</p>
        <a
          href="https://maps.app.goo.gl/QdTKbAiPitVPYaDt9"
          className="comoLlegar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo Llegar
        </a>
      </div>

      {/* seccion 5, mensaje  */}

      <div className="cardInfo">
        <p className="poem mensaje5">""</p>
        <p className="poem mensaje">
          "El hombre y la mujer fueron creados el uno para el otro: "No es bueno
          que el hombre esté solo" (Gn 2, 18). "Por eso deja el hombre a su
          padre y a su madre y se une a su mujer, y se hacen una sola carne".
        </p>
        <p className="poem mensaje">
          De este modo, Dios ha creado al hombre y a la mujer por amor y los ha
          llamado también al amor. Por tanto el amor mutuo entre ellos se
          convierte en imagen del amor de Dios hacia nosotros.
        </p>
      </div>

      {/* seccion 6, dressCode  */}

      <div className="cardInfo">
        <h2 className="cardInfo-poema">Dress Code</h2>
        <img className="imgIglesia" src={imageDressCode} alt="" />
        <div>
          <p className="dressCodeEtiqueta">Etiqueta formal</p>
          <div className="dressCode">
            <div>
              <p className="dressCodeMH">Mujeres</p>
              <p className="dressCodeText">Reservarse el blanco</p>
            </div>
            <div>
              <p className="dressCodeMH">Hombres</p>
              <p className="dressCodeText">Reservarse el gris</p>
            </div>
          </div>
        </div>
      </div>

      {/* seccion 7, confirmar visita  */}

      <div className="confirmarVisita">
        <h3>Confirma tu asistencia</h3>
        <p className="botonConfirmar">Confirmar</p>
      </div>
    </div>
  );
};

export default Home;
