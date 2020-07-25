import React, { useState }  from "react";
import { BsArrowRight,BsArrowDown } from "react-icons/bs";

import './Home.css'
 
function Home() {
   
    const [styleHover, setStyleHover] = useState(true);

    return (
      <div className="Home" id="Home">
         <div className="HomeText">
            <div className="HomeText1">
              <h2 className="HomeH21">Bienvenue, &nbsp;</h2> <h2 className="HomeH22"> je suis <span className="HomeName">Céline Cottier</span>, </h2>
            </div>
              <br/>
              <div className="HomeText2">
              <h2 className="HomeH23">développeuse web &nbsp;</h2> <h2 className="HomeH24">Full-Stack.</h2>
              </div>
              <a  href="#about" onMouseEnter={() => setStyleHover(!styleHover)} onMouseLeave={() => setStyleHover(!styleHover)} className="HomeLink" >{ styleHover ? <div className="divHomeLink"><p className="textLinkHome">Voir mes projets</p> <BsArrowRight  className="homeArrow"/></div> : <div className="divHomeLink"><p className="textLinkHome">Voir mes projets </p> <BsArrowDown  className="homeArrow"/></div> }</a>
         </div>
      </div>
    );
  }

export default Home;