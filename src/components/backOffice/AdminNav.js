import React from 'react'
import { Link } from 'react-router-dom'

import './AdminNav.css'

function AdminNav() {
  return (
    <div className='adminNav'>
      <ul className='adminNavUl'>
        <li className='adminNavLi'>
          <Link className='adminNavLink' to={'/cc-admin/'}>
            {' '}
            <p className='navP'>Accueil</p>{' '}
          </Link>
        </li>
        <li className='adminNavLi'>
          <Link className='adminNavLink' to={'/cc-admin/mes-projets'}>
            {' '}
            <p className='navP'>Projets</p>
          </Link>
        </li>
        <li className='adminNavLi'>
          <Link className='adminNavLink' to={'/cc-admin/mon-profil'}>
            {' '}
            <p className='navP'>Mon profil</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminNav
