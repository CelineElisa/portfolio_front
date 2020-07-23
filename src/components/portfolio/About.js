import React, {useState, useEffect} from "react";
import axios from 'axios'

import photoProfilNB from "../../images/photoProfilNB.jpg";
import MySQL from "../../images/MySQL.svg";
import CV from "./CV.pdf";
import { FiDownload } from "react-icons/fi";

import "./About.css";

function About() {

  const [profile, setProfile] = useState(null)

  const getProfile = () => {
    axios.get('http://localhost:8080/api/profile').then((res) => setProfile(res.data))
  }

  useEffect(() => getProfile(), [])

  return (
    <div className="about" id="about">
      <h2 className="aboutH2">A propos</h2>
      <div className="iconesTech">
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="Logo HTML"
        />
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="Logo CSS"
        />
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="Logo JavaScript"
        />
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo React"
        />
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="Logo Node JS"
        />
        <img
          className="iconTech"
          src={MySQL}
          alt="Logo MySQL"
        />
        <img
          className="iconTech"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          alt="Logo Git"
        />
      </div>
      {profile ? (
      <div className="profileAndCompetencies">
        <div className="profile">
              <img className="profilePict" src={`images/${profile.profile_pict}`} alt="profile"/>
        </div>
          <div className="aboutRight">
            <p className="profileText">{profile.description}</p>
            <div className="profileTech">
                <h3 className="techH3"> Technologies : </h3> 
                <p>{profile.techno}</p>
            </div>
            <div className="contactAndDown">
                <div className="contactMe">
                      <h3 className="contactMeH3">Me contacter :</h3>
                      <p>{profile.email}</p>
                      <p>Linkedin : <a className="aAbout" href={profile.linkedin} target="blank">www.linkedin.com/in/céline-cottier</a></p>
               </div>
               <div className="downloadCVDiv">
                <a  href={`${profile.cv}`} target="blank" className="downloadCV" ><FiDownload/> Télécharger mon CV </a>
              </div>
            </div>
          </div>
        </div>
      ):('loading')}
    </div>
  );
}

export default About;
