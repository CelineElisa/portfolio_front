import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AdminNav from './AdminNav'

import './Profile.css'

function Profile() {
  const [data, setData] = useState(null)

  const getProfile = () => {
    axios
      .get('http://localhost:8080/api/profile')
      .then((res) => setData(res.data))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:8080/api/profile/1`, data)
      .then((res) => alert(`Le profil a bien été mis à jour`))
      .catch((err) => alert(`erreur : ${err.response.data} `))
  }

  useEffect(() => getProfile(), [])

  return data ? (
    <div className='adminProfile'>
      <AdminNav />
      <div className="profileFormContainer">
        <form className='form' onSubmit={handleSubmit}>
          <h2 className="formTitle">Modifier le profil</h2>
          <hr className='hr-col' />
          <div className='form-container'>
            <div className='divForm'>
              <label htmlFor='profile_pict'>Photo de profil</label>
              <input
                type='text'
                name='profile_pict'
                id='profile_pict'
                value={data.profile_pict}
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
                value={data.description}
                className='form-textarea'
                onChange={handleChange}
              />
              <br />
            </div>
            <div className='divForm'>
              <label htmlFor='techno'>Technologies</label>
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
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                id='email'
                value={data.email}
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='linkedin'>Linkedin</label>
              <input
                type='text'
                name='linkedin'
                id='linkedin'
                value={data.linkedin}
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='github'>GitHub</label>
              <input
                type='text'
                name='github'
                id='github'
                value={data.github}
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <div className='divForm'>
              <label htmlFor='cv'>CV</label>
              <input
                type='text'
                name='cv'
                id='cv'
                value={data.cv}
                className='form-input'
                onChange={handleChange}
              />
            </div>
            <input type='submit' value='ENVOYER' className='button-send' />
          </div>
        </form>
      </div>
    </div>
  ) : (
    'loading'
  )
}

export default Profile
