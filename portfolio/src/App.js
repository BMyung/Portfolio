import React, { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/home/intro';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact'

class App extends Component {
  render(){
    return (
      <div className="container">
      <Header ></Header>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      </div>
    )
  }
}

export default App;
