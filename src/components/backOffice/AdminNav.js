import React from "react";
import { Link } from 'react-router-dom'

// import { FiMail } from "react-icons/fi";
// import './Nav.css'
 
function AdminNav() {
   
    return (
      <div className="adminNav">
          <ul className="adminNavUl">
              <li className="adminNavLi"><Link className="adminNavLink" to={"/cc-admin/"}> <p className="navP">Home</p> </Link></li>
              <li className="adminNavLi"><Link className="adminNavLink" to={"/cc-admin/mes-projets"}> <p className="navP">Projets</p></Link></li>
          </ul>
      </div>
    );
  }

export default AdminNav;