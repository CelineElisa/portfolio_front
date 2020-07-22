import React, { useState } from "react";
import PPHome from "../../images/PPHome.png";
import PPPhone from "../../images/PPPhone.png";
import PPResults from "../../images/PPResults.png";

import "./Portfolio.css";

const Projet2 = ({ setModal2, modal2 }) => {
  const [pict, setPict] = useState(1);

  const showPict = (arg) => {
    if (arg === 1 && pict === 3) {
      setPict(1);
    } else if (arg === -1 && pict === 1) {
      setPict(3);
    } else {
      setPict(pict + arg);
    }
  };

  return (
    <div className={modal2 ? "active" : "nonActive"}>
      <div className="divCloseModal">
        <button className="closeModal" onClick={() => setModal2(false)}>
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
            src={PPHome}
            alt="Project pôle position"
          />
          <img
            className={pict === 2 ? "carouselPict" : "nonActive"}
            src={PPResults}
            alt="Project pôle position"
          />
          <img
            className={pict === 3 ? "carouselPict phonePict" : "nonActive"}
            src={PPPhone}
            alt="Project pôle position phone"
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
        <h3 className="projectH3">Pôle Position</h3>
        <p className="projectText">
          Projet de groupe. Site qui permet de trouver des offres d'emploi classées par temps de trajet grâce à l'utilisation des API Pôle emploi et Navitia.{" "}
        </p>
        <a className="websiteLink" href="https://pole-position.netlify.app" target="blank">
          Voir le site{" "}
        </a>
      </div>
    </div>
  );
};

export default Projet2;