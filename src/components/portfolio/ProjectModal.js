import React, { useState} from "react"

import "./Portfolio.css";

const ProjectModal = ({ setModal, modal, project, screenshots }) => {
  const [pict, setPict] = useState(1);
 
  const showPict = (arg) => {
    let nbPicts = screenshots.length
   
    if (arg === 1 && pict === nbPicts) {
      setPict(1);
    } else if (arg === -1 && pict === 1) {
      setPict(nbPicts);
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
          {screenshots.map( screenshot => (
            <div key={screenshot.id}>
             <img
             className={pict === screenshot.id_carousel ? "carouselPict" : "nonActive"}
             src={`images/${screenshot.url}`}
             alt={screenshot.name}
           />
           </div>
          ))}
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
        <h3 className="projectH3">{project.name}</h3>
        <p className="projectText">{project.description}</p>
        <a className="websiteLink" href={project.url_app} target="blank">
          Voir le site{" "}
        </a>
      </div>
    </div>
  ) 
};

export default ProjectModal;
