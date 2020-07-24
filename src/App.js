import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AppPortfolio from './components/portfolio/AppPortfolio'
import AdminHome from './components/backOffice/AdminHome'
import Projects from './components/backOffice/Projects'
import Profile from './components/backOffice/Profile'
import EditProjectForm from './components/backOffice/EditProjectForm'
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cc-admin/mes-projets/editer" component = {EditProjectForm}/>"
        <Route path="/cc-admin/mon-profil" component = {Profile}/>
        <Route path="/cc-admin/mes-projets" component = {Projects}/>
        <Route path="/cc-admin" component = {AdminHome}/>
        <Route path="/" component = {AppPortfolio}/>
      </Switch>
    </div>
  );
}

export default App;
