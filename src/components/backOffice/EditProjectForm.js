import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import "./Footer.css";

function EditProjectForm({ setShowEditProjectModal, projectId }) {
  const [data, setData] = useState(null)
  const [screenshots, setScreenshots] = useState(null)
  const [showAddScreen, setShowAddScreen] = useState(false)
  const [newScreenshot, setNewScreenShot] = useState({
    name: '',
    url: '',
    id_project : `${projectId}`
  })

  const getProject = () => {
    axios
      .get(`http://localhost:8080/api/projects/${projectId}`)
      .then((res) => setData(res.data))
  }

  const getScreenshots = () => {
    axios
      .get(`http://localhost:8080/api/screenshots/${projectId}`)
      .then((res) => setScreenshots(res.data))
  }

  const handleChange = (e) => {
    //console.log('form changed')
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    //console.log('formulaire soumis')
    e.preventDefault()
    axios
      .put(`http://localhost:8080/api/projects/${projectId}`, data)
      .then((res) => alert(`Le projet a bien été modifié`))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  const handleChangeScreenshot = (e, field) => {
    // console.log(field)
    const upScreenId = parseInt(e.target.name)
    const upScreenValue = e.target.value
    const index = screenshots.findIndex((project) => project.id === upScreenId)
    //console.log(index)
    const screenshotsTemp = [...screenshots]
    //console.log('screen temp', screenshotsTemp)
    screenshotsTemp[index][field]= upScreenValue
    //console.log('state', screenshots)
  }

  const handleEditScreenshot = (e) => {
    e.preventDefault()
    const idScreenshot = parseInt(e.target.id)
    let body = screenshots.filter( screenshot => screenshot.id === idScreenshot)
    //console.log(body)
    axios.put(`http://localhost:8080/api/screenshots/${idScreenshot}`, body[0])
      .then((res) => alert(`Le screenshot a bien été modifié`))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  const handleDeleteScreenshot = (e) => {
    e.preventDefault()
    const idScreenshot = parseInt(e.target.id)
    axios.delete(`http://localhost:8080/api/screenshots/${idScreenshot}`)
      .then((res) => {
        let screenshotsTemp = [...screenshots]
        screenshotsTemp = screenshotsTemp.filter(screenshot => screenshot.id != idScreenshot)
        setScreenshots(screenshotsTemp)
      })
      .then((res) => alert('Le screenshot a été supprimé'))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  const handleAddScreenshot = (e) => {
    e.preventDefault()
    setShowAddScreen(true)
  }

  const handleChangeNewScreenshot = (e) => {
    const { name, value } = e.target
    setNewScreenShot({ ...newScreenshot, [name]: value })
  }

  const handleSubmitNewScreenshot = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8080/api/screenshots/`, newScreenshot)
    .then((res) => {
      let screenshotsTemp = [...screenshots]
      screenshotsTemp.push(res.data)
      setScreenshots(screenshotsTemp)
    })
    .then((res) => alert(`Nouveau screenshot ajouté`))
    .catch((err) => alert(`erreur : ${err.response.data} `))
    setShowAddScreen(false)
  }

  useEffect(() => getProject(), [])
  useEffect(() => getScreenshots(), [])

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
            <input
              type='text'
              name='name'
              id='name'
              value={data.name}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='divForm'>
            <label htmlFor='techno'>technologies utilisées</label>
            <input
              type='text'
              name='techno'
              id='techno'
              value={data.techno}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='divForm'>
            <label htmlFor='url_app'>lien du site</label>
            <input
              type='text'
              name='url_app'
              id='url_app'
              value={data.url_app}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='divForm'>
            <label htmlFor='url_pict'>lien de la Photo</label>
            <input
              type='text'
              name='url_pict'
              id='url_pict'
              value={data.url_pict}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          {/* <div className='divForm'>
            <label htmlFor='url_pict2'>lien de la Photo num 2</label>
            <input
              type='text'
              name='url_pict2'
              id='url_pict2'
              value={data.url_pict2}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='divForm'>
            <label htmlFor='url_pict3'>lien de la Photo num 3</label>
            <input
              type='text'
              name='url_pict3'
              id='url_pict3'
              value={data.url_pict3}
              className='form-input'
              onChange={handleChange}
            />
          </div> */}
          <div className='textareaForm'>
            <label htmlFor='description' className='message-flex'>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              value={data.description}
              className='form-textarea'
              onChange={handleChange}
            />
            <br />
          </div>
          <input type='submit' value='ENVOYER' className='button-send' />
        </div>
      </form>
      {screenshots ? (
        <div>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Modifier les screenshots du projet</h2>
          <hr className='hr-col' />
          {screenshots.map((screenshot) => (
            <div>
              <div className='divForm'>
                <label htmlFor="name">nom de l'image</label>
                <input
                  type='text'
                  name={screenshot.id}
                  id="name"
                  placeholder={screenshot.name}
                  className='form-input'
                  onChange={ (e) => handleChangeScreenshot(e, 'name')}
                />
              </div>
              <div className='divForm'>
                <label htmlFor="url">lien de l'image</label>
                <input
                  type='text'
                  name={screenshot.id}
                  id="url"
                  placeholder={screenshot.url}
                  className='form-input'
                  onChange={(e) => handleChangeScreenshot (e, 'url')}
                />
              </div>
              <button id={screenshot.id} onClick={handleEditScreenshot}>
                Modifier
              </button>
              <button id={screenshot.id} onClick={handleDeleteScreenshot}>
                Supprimer
              </button>
            </div>
          ))}
        </form>
        <button onClick={handleAddScreenshot}>
           Ajouter un screenshot
        </button>
        {showAddScreen ? (
       <div>
       <div className='divForm'>
         <label htmlFor="name">nom de l'image</label>
         <input
           type='text'
           name="name"
           id="name"
           value={newScreenshot.name}
           className='form-input'
           onChange={handleChangeNewScreenshot}
         />
       </div>
       <div className='divForm'>
         <label htmlFor="url">lien de l'image</label>
         <input
           type='text'
           name="url"
           id="url"
           value={newScreenshot.url}
           className='form-input'
           onChange={handleChangeNewScreenshot}
         />
       </div>
       <button onClick={handleSubmitNewScreenshot}>
         valider le nouveau screenshot
       </button>
       </div>
      ) : (<></>)}
        </div>
      ) : (
      <></>
      )}
      {/* {console.log(screenshots)} */}
    </div>
  ) : (
    'loading'
  )
}

export default EditProjectForm
