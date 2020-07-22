import React from "react";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedin} from "react-icons/fa";
import { BsChevronDoubleUp } from "react-icons/bs";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a  href="#Home" className="footerLinkHome"><BsChevronDoubleUp/></a>
      <div className="linksFooter">
      <a className="linkFooter" href="https://www.linkedin.com/in/céline-cottier" target="blank"><FaLinkedin className="iconFooter"/> <p className="pLinkFooter">Linkedin</p> </a>
      <a className="linkFooter" href="https://github.com/CelineElisa" target="blank"><AiFillGithub className="iconFooter"/> <p className="pLinkFooter">GitHub</p> </a>
      </div>
      <p className="pFooter">@ Céline Cottier 2020</p>
    </div>
  );
}

export default Footer;
