import React, {Component } from 'react';
import pp1 from './pp1.jpg';
import checksplit from './checksplit.jpg';
import johng from './linklist.JPG'

export default class ProjectsResponsive extends Component {
    render (){
    return (
<div id="projects" className="projects page">
<h1>Projects</h1>
  <ul>
    <li>
      <div className="projectHeading">
        <img src={pp1} alt="nonprofit project thumbnail" />
        <h3>Nonprofit Search</h3>
      </div>
      <p>Web application built using two API sources to search and display nonprofit organization 
      summaries and financial information. Users can create an account to create a "Favorites" list of saved nonprofits.</p>
      <h4>Tech Used</h4>
      <ul className="tech">
        <li>Python</li>
        <li>Django</li>
        <li>Bootstrap</li>
        <li>RestAPI</li>
        <li>MySQL</li>
      </ul>
      <div className="projectLinks">
        <a href="https://youtu.be/60IOSp7_T_M">View Demo on Youtube <i className="fab fa-youtube" /></a> |  
        <a href="https://github.com/BMyung/Nonprofit-Search/tree/one-API"> View GitHub Repository <i className="fab fa-github" /></a>
      </div>
    </li>
    <li>
      <div className="projectHeading">
        <img src={johng} alt="nonprofit project thumbnail" />
        <h3>JohnG LinkShare Page</h3>
      </div>
      <p>Fully responsive link-sharing page created using React for speaker and magician John Guastaferro. Page showcases his different professions and available services and deployed to github pages.</p>
      <h4>Tech Used</h4>
      <ul className="tech">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
      </ul>
      <div className="projectLinks">
        <a href="https://bmyung.github.io/linkshare/">View page</a> |  
        <a href="https://github.com/BMyung/linkshare"> View GitHub Repository <i className="fab fa-github" /></a>
      </div>
    </li>
    <li>
      <div className="projectHeading">
        <img src={checksplit} alt="restaurant menu" />
        <h3>Check Split</h3>
      </div>
      <p>Web application which assists in splitting restaurant checks by calculating each person's the necessary tax and tip and displaying a running total for the group</p>
      <h4>Tech Used</h4>
      <ul className="tech">
        <li>Java</li>
        <li>Spring Tools Suite</li>
        <li>AJAX</li>
        <li>jQuery</li>
        <li>MySQL</li>
      </ul>
      {/* <div className="projectLinks">
        <a href="https://youtu.be/60IOSp7_T_M">View Demo on Youtube <i className="fab fa-youtube" /></a> |  
        <a href="https://github.com/BMyung/Nonprofit-Search/tree/one-API"> View GitHub Repository <i className="fab fa-github" /></a>
      </div> */}
    </li>
  </ul>
</div>
    )
    }
}
