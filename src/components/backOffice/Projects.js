import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AdminNav from './AdminNav'
import NewProjectForm from './NewProjectForm'
import EditProjectForm from './EditProjectForm'

//import "./Footer.css";

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
      console.log(e.target.id)
      if (answer){
        const idProject = e.target.id
          console.log('je veux supprimer ce projet')
          axios.delete(`http://localhost:8080/api/projects/${idProject}`)
          .then((res) => alert('Le projet a été supprimé'))
          
      } else {
        console.log('je ne veux pas supprimer ce projet !!!!')
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
    <div className='adminHome'>
      <AdminNav />
      <h2>Mes projets</h2>
      {projects.map( project => (
          <div key={project.id} >
              {project.id}, {project.name}, {project.techno} 
              <button id={project.id} onClick={handleDelete}> Supprimer </button>
              <button id={project.id} onClick={handleEdit}> Editer </button>
          </div>
      ))}
      <button onClick={() => setShowNewProjectModal(true)}>ajouter un projet</button>
      {console.log(projects)}
    </div>
  )
  ) : "loading"
}

export default Projects
