import React, { useState } from "react";
import PixieWilderHome from "../../images/PixieWilderHome.png";
import PixieWilderDark from "../../images/PixieWilderDark.png";
import PixieWilderPhone from "../../images/PixieWilderPhone.png";

import "./Portfolio.css";

const Projet1 = ({ setModal, modal }) => {
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
    <div className={modal ? "active" : "nonActive"}>
      <div className="divCloseModal">
        <button className="closeModal" onClick={() => setModal(false)}>
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
            src={PixieWilderHome}
            alt="Project Pixie Wilders"
          />
          <img
            className={pict === 2 ? "carouselPict" : "nonActive"}
            src={PixieWilderDark}
            alt="Project Pixie Wilders"
          />
          <img
            className={pict === 3 ? "carouselPict phonePict" : "nonActive"}
            src={PixieWilderPhone}
            alt="Project Pixie Wilders phone"
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
        <h3 className="projectH3">Pixie Wilders</h3>
        <p className="projectText">
          Projet de groupe. Site qui met en avant des photographes
          proposant de la prestation de service.{" "}
        </p>
        <a className="websiteLink" href="https://celineelisa.github.io/PixieWilder/" target="blank">
          Voir le site{" "}
        </a>
      </div>
    </div>
  );
};

export default Projet1;
