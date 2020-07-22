import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import "./Footer.css";

function EditProjectForm({ setShowEditProjectModal, projectId }) {

  const [data, setData] = useState(null)

  const getProject = () => {
    axios
      .get(`http://localhost:8080/api/projects/${projectId}`)
      .then((res) => setData(res.data))
  }

  const handleChange = (e) => {
    console.log('form changed')
    const { name, value } = e.target
    setData({ ...data, [name]: value })
}

const handleSubmit = (e) => {
    console.log("formulaire soumis")
    e.preventDefault()
  axios
    .put(`http://localhost:8080/api/projects/${projectId}`, data)
    .then((res) => res.data)
    .then((res) => alert(`${res}`))
    .catch((err) => alert(`erreur : ${err.response.data} `))
}

  useEffect(() => getProject(), [])

  return data ? (
    <div>
      <button onClick={() => setShowEditProjectModal(false)}>
        Retour à la liste des projets
      </button>
      <form className='form' onSubmit={handleSubmit}>
    
    <h2>Modifier le projet</h2>
    <hr className='hr-col' />
    <div className='form-container'>
        <div className='divForm'>
          <label htmlFor='name'>Nom du projet</label>
          <input type='text' name='name' id='name' value={data.name} className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='techno'>technologies utilisées</label>
          <input type='text' name='techno' id='techno' value={data.techno} className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_pict'>lien de la Photo</label>
          <input type='text' name='url_pict' id='url_pict' value={data.url_pict} className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_app'>lien du site</label>
          <input type='text' name='url_app' id='url_app' value={data.url_app} className='form-input' onChange={handleChange} />
        </div>
      <div className='textareaForm'>
        <label htmlFor='description' className='message-flex'>Description</label>
        <textarea name='description' id='description' value={data.description} className='form-textarea' onChange={handleChange} /><br />
     </div>
        <input type='submit' value='ENVOYER' className='button-send' />
    </div>
    
  </form>
        {console.log(data)}
    </div>
  ) : ("loading")
}

export default EditProjectForm
