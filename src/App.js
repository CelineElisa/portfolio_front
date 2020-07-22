import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AppPortfolio from './components/portfolio/AppPortfolio'
import AppAdmin from './components/backOffice/AppAdmin'
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {AppPortfolio}/>
        <Route exact path="/cc-admin" component = {AppAdmin}/>
      </Switch>
    </div>
  );
}

export default App;
