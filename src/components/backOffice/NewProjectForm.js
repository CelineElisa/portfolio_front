import React, { useState } from 'react'
import axios from 'axios'

//import "./Footer.css";

function NewProjectForm({ setShowNewProjectModal }) {

    const [data, setData] = useState({
        name: 'non renseigné',
        techno: 'non renseigné',
        url_pict: 'non renseigné',
        url_app: 'non renseigné',
        description: 'non renseigné',
        url_pict2 : 'non renseigné',
        url_pict3 : 'non renseigné'
      })


  const handleSubmit = (e) => {
      console.log("formulaire soumis")
      e.preventDefault()
    axios
      .post('http://localhost:8080/api/projects', data)
      .then((res) => res.data)
      .then((res) => alert(`${res}`))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  const handleChange = (e) => {
      console.log('form changed')
      const { name, value } = e.target
      setData({ ...data, [name]: value })
  }

  return (
    <div>
    <button onClick={() => setShowNewProjectModal(false)}>Retour à la liste des projets</button>
    <form className='form' onSubmit={handleSubmit}>
    
    <h2>Ajouter un nouveau projet</h2>
    <hr className='hr-col' />
    <div className='form-container'>
        <div className='divForm'>
          <label htmlFor='name'>Nom du projet</label>
          <input type='text' name='name' id='name' className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='techno'>technologies utilisées</label>
          <input type='text' name='techno' id='techno' className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_app'>lien du site</label>
          <input type='text' name='url_app' id='url_app' className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_pict'>lien de la Photo</label>
          <input type='text' name='url_pict' id='url_pict' className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_pict2'>lien de la Photo num 2</label>
          <input type='text' name='url_pict2' id='url_pict2' className='form-input' onChange={handleChange} />
        </div>
        <div className='divForm'>
          <label htmlFor='url_pict3'>lien de la Photo num 3</label>
          <input type='text' name='url_pict3' id='url_pict3' className='form-input' onChange={handleChange} />
        </div>
      <div className='textareaForm'>
        <label htmlFor='description' className='message-flex'>Description</label>
        <textarea name='description' id='description' className='form-textarea' onChange={handleChange} /><br />
     </div>
        <input type='submit' value='ENVOYER' className='button-send' />
    </div>
    {console.log(data)}
  </form>
  </div>
  )
  
}

export default NewProjectForm
