import React, { useState } from "react";
import Project1 from "./Project1";
import PixieWilderHome from "../../images/PixieWilderHome.png";
import ListeJeuxHome from "../../images/ListeJeux.png";
import ProjectGameList from "./ProjectGameList";
import PPHome from "../../images/PPHome.png";
import Project2 from "./Project2"

import "./Portfolio.css";

const About = () => {

  const [modal, setModal] = useState(false);
  const [modalGL, setModalGL] = useState(false);
  const [modal2, setModal2] = useState(false);
 

  return (
    <div className="Portfolio" id="Portfolio">
      <h2 className="portfolioH2">Portfolio</h2>
      <div className="cardsContainer">
          <div className="card">
            <img className="cardPict" src={PixieWilderHome} alt="Project Pixie Wilder"/>
            <h3 className="cardH3">Pixie Wilder</h3>
            <p className="cardText">HTML/CSS/JavaScript vanilla</p>
            <button className="cardButton" onClick={() => setModal(true)}> Voir plus </button>
          </div>
          <div className="card">
            <img className="cardPict" src={ListeJeuxHome} alt="Project liste de jeux"/>
            <h3 className="cardH3">Liste de jeux</h3>
            <p className="cardText">React JS/CSS, appel API</p>
            <button className="cardButton" onClick={() => setModalGL(true)}> Voir plus </button>
          </div>
          <div className="card">
            <img className="cardPict" src={PPHome} alt="Project Pôle position"/>
            <h3 className="cardH3">Pôle Position</h3>
            <p className="cardText">React JS/CSS, utilisation de deux API</p>
            <button className="cardButton" onClick={() => setModal2(true)}> Voir plus </button>
          </div>
      </div>
         <Project1 setModal={setModal} modal={modal}/>
         <ProjectGameList setModalGL={setModalGL} modalGL={modalGL} />
         <Project2 setModal2={setModal2} modal2={modal2} />
    </div>
  );
}

export default About;
