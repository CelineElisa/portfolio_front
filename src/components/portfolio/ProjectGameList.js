import React, { useState } from "react";
import ListeJeuxHome from "../../images/ListeJeux.png";
import ListeJeuxPhone from "../../images/ListeJeuxPhone.png";


import "./Portfolio.css";

const ProjectGameList = ({ setModalGL, modalGL }) => {
  const [pict, setPict] = useState(1);

  const showPict = (arg) => {
    if (arg === 1 && pict === 2) {
      setPict(1);
    } else if (arg === -1 && pict === 1) {
      setPict(2);
    } else {
      setPict(pict + arg);
    }
  };

  return (
    <div className={modalGL ? "active" : "nonActive"}>
      <div className="divCloseModal">
        <button className="closeModal" onClick={() => setModalGL(false)}>
          {" "}
          &times;{" "}
        </button>
      </div>
      <div className="modalContent">
        <div className="carousel">
          <button className="buttonPict" onClick={() => showPict(-1)}>
            &lt;
          </button>
          <img
            className={pict === 1 ? "carouselPict" : "nonActive"}
            src={ListeJeuxHome}
            alt="Project liste de jeux phone"
          />
          <img
            className={pict === 2 ? "carouselPict phonePict" : "nonActive"}
            src={ListeJeuxPhone}
            alt="Project liste de jeux phone"
          />
          <button className="buttonPict" onClick={() => showPict(1)}>
            &gt;
          </button>
        </div>
        <div className="buttonsPictPhone">
          <button className="buttonPictPhone" onClick={() => showPict(-1)}>
            &lt;
          </button>
          <button className="buttonPictPhone" onClick={() => showPict(1)}>
            &gt;
          </button>
         </div> 
        <h3 className="projectH3">Liste de jeux</h3>
        <p className="projectText">
          Projet réalisé dans le cadre d'un exercice à la Wild Code School avec appel API.
        </p>
        <a className="websiteLink" href="https://liste-jeux.netlify.app" target="blank">
          Voir le site
        </a>
      </div>
    </div>
  );
};

export default ProjectGameList;
