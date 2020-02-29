import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Project/Projects'

import './styles/app.scss'

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Projects/>
        <Contact />
      </div>
    )
  }
}

export default App
