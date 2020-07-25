import React, { useState } from 'react'
import axios from 'axios'

import './NewProject.css'

function NewProjectForm({ setShowNewProjectModal }) {
  const [data, setData] = useState({
    name: 'non renseigné',
    techno: 'non renseigné',
    url_pict: 'non renseigné',
    url_app: 'non renseigné',
    description: 'non renseigné',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8080/api/projects', data)
      .then((res) => alert(`Nouveau projet ajouté`))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div className="NewProjectPage">
      <div className="returnMenu">
        <button className="returnButton" onClick={() => setShowNewProjectModal(false)}>
          Retour à la liste des projets
        </button>
      </div>
      <div className="contentNewProject">
        <form className='form' onSubmit={handleSubmit}>
          <h2 className="h2NewProject">Ajouter un nouveau projet</h2>
          <hr className='hr-col' />
          <div className='form-container'>
            <div className='divForm'>
              <label htmlFor='name'>Nom du projet</label>
              <input
                type='text'
                name='name'
                id='name'
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='techno'>Technologies utilisées</label>
              <input
                type='text'
                name='techno'
                id='techno'
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='url_app'>Lien du site</label>
              <input
                type='text'
                name='url_app'
                id='url_app'
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='url_pict'>Photo principale</label>
              <input
                type='text'
                name='url_pict'
                id='url_pict'
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='textareaForm'>
              <label htmlFor='description' className='message-flex'>
                Description
              </label>
              <textarea
                name='description'
                id='description'
                className='form-textarea'
                onChange={handleChange}
              />
              <br />
            </div>
            <input type='submit' value='ENVOYER' className='button-send' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProjectForm
