import React from "react";
import AdminNav from "./AdminNav"

import "./AdminHome.css";

function AdminHome() {
  return (
    <div className="adminHome">
     <AdminNav/>
     <div className="adminHomeDiv">
     <h2 className="h2AdminHome">Bienvenue sur la partie administrateur</h2>
     </div>
    </div>
  );
}

export default AdminHome;
