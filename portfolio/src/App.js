import React, { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/home/intro';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import ProjectsResponsive from './components/projects/projects_responsive';

class App extends Component {
  render(){
    return (
      <div className="container">
      <Header ></Header>
      <Intro></Intro>
      <About></About>
      <ProjectsResponsive></ProjectsResponsive>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      <Contact></Contact>
      </div>
    )
  }
}

export default App;
