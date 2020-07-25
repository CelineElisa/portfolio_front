import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNav from './AdminNav'
import NewProjectForm from './NewProjectForm'
import EditProjectForm from './EditProjectForm'

import "./Projects.css";

function Projects() {

  const [projects, setProjects] = useState(null)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const [showEditProjectModal, setShowEditProjectModal] = useState(false)
  const [projectId, setProjectId] = useState(false)

  const getProjects = () => {
    axios.get('http://localhost:8080/api/projects').then((res) => setProjects(res.data))
  }

  const handleDelete = (e) => {
      const answer = window.confirm('Etes vous sûr de vouloir supprimer ce projet ?')
      if (answer){
        const idProject = e.target.id
          axios.delete(`http://localhost:8080/api/projects/${idProject}`)
          .then((res) => alert('Le projet a été supprimé'))
      }
  }

  const handleEdit = (e) => {
    setShowEditProjectModal(true)
    setProjectId(e.target.id)
  }

  useEffect(() => getProjects(), [])

  return projects ? ( showNewProjectModal ? (
    <div><NewProjectForm setShowNewProjectModal={setShowNewProjectModal} /></div>
    ) : ( showEditProjectModal ? (
        <div><EditProjectForm setShowEditProjectModal={setShowEditProjectModal} projectId={projectId} /></div>
    ) :
    <div className='adminProjects'>
      <AdminNav />
      <div className="adminProjectsContainer">
      <div className="adminProjectsContainer2">
      <h2 className="h2Projects">Mes projets</h2>
      {projects.map( project => (
          <div key={project.id} className="projectDiv">
              <p>{project.id}, {project.name}, {project.techno} </p>
              <div >
              <button className="buttonProject" id={project.id} onClick={handleEdit}> Editer </button>
              <button className="buttonProject" id={project.id} onClick={handleDelete}> Supprimer </button>
              </div>
          </div>
      ))}
      <button className="buttonNewProject" onClick={() => setShowNewProjectModal(true)}>Ajouter un projet</button>
      </div>
      </div>
    </div>
  )
  ) : "loading"
}

export default Projects
