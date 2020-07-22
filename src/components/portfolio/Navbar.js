import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeopleCircle, BsBriefcase } from "react-icons/bs";
// import { FiMail } from "react-icons/fi";
import './Nav.css'
 
function Navbar() {
   
    return (
      <div className="Nav">
          <ul className="navUl">
              <li className="navLi"><a className="navLink" href="#Home"><AiOutlineHome className="icon1"/> <p className="navP">ACCUEIL</p> </a></li>
              <li className="navLi"><a className="navLink" href="#about"><BsPeopleCircle className="icon1"/> <p className="navP">A PROPOS</p></a></li>
              <li className="navLi"><a className="navLink" href="#Portfolio"><BsBriefcase className="icon3"/> <p className="navP">PORTFOLIO</p></a></li>
              {/*<li className="navLi"><a className="navLink"><FiMail className="icon4"/> <p className="navP">CONTACT</p></a></li>*/}
          </ul>
      </div>
    );
  }

export default Navbar;