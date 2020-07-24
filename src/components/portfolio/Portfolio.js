import React, { useState, useEffect } from "react";
import axios from 'axios'

import ProjectModal from "./ProjectModal"

import "./Portfolio.css";

const About = () => {

  const [projects, setProjects] = useState(null)
  const [project, setProject] = useState(null)
  const [modal, setModal] = useState(false)
  const [screenshots, setScreenshots] = useState(null)
  const [screensProject, setScreensProject] = useState(null)
 
  const getProjects = () => {
    axios.get('http://localhost:8080/api/projects').then((res) => setProjects(res.data))
  }
  const getScreenshots = () => {
    axios.get(`http://localhost:8080/api/screenshots/`).then((res) => setScreenshots(res.data))
  }

  const handleModal = (e) => {
    setModal(true)
    let projectTemp = projects
    projectTemp = projectTemp.filter( project => ( project.id === parseInt(e.target.id) ))
    setProject(projectTemp)
    let screensProjectTemp = screenshots
    screensProjectTemp = screensProjectTemp.filter( screenshot => (screenshot.id_project === parseInt(e.target.id)) )
    for (let i=0 ; i < screensProjectTemp.length ; i++){
      screensProjectTemp[i].id_carousel = i+1
    }
    setScreensProject(screensProjectTemp)
  }

  useEffect(() => getProjects(), [])
  useEffect(() => getScreenshots(), [])

  return projects ? ( 
    <div className="Portfolio" id="Portfolio">
      <h2 className="portfolioH2">Portfolio</h2>
      <div className="cardsContainer">
         {projects.map( project => (
          <div key={project.id} className="card">
              <img className="cardPict" src={`images/${project.url_pict}`} alt="Project Pixie Wilder"/>
              <h3 className="cardH3">{project.name}</h3>
              <p className="cardText">{project.techno}</p>
              <button className="cardButton" id={project.id} onClick={handleModal}> Voir plus </button>
          </div>
           ))}
      </div>
          { project ?
          <ProjectModal setModal={setModal} modal={modal} project={project[0]} screenshots={screensProject}/>
          : <></>
          }
          {/* {console.log(screensProject)} */}
    </div>
  ) : ("loading")
}

export default About;
