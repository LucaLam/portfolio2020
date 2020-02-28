import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Project/Projects'

import './styles/app.scss'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/projects' component={Projects} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
