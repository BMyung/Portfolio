import React, {Component } from 'react';

export default class Projects extends Component {
render (){
return (
<div id="projects" className="page">
  <h1>Projects</h1>
  <div className="project card">
    <img src="img/placeholder.jpg" />
    <div className="projectDesc">
      <h3>Nonprofit Search</h3>
      <p>Web application built using two API sources to search and 
        display nonprofit organization summaries and available tax information.
        Utilized MySQL to allow users to create an account and save selected nonprofits to a "Favorites" list.
      </p>
      <h4>Tech Used</h4>
      <ul>
        <li>Python</li>
        <li>Django</li>
        <li>Bootstrap</li>
        <li>RestAPI</li>
        <li>MySQL</li>
      </ul>
    </div>
  </div>
  <div className="project card">
    <img src="img/placeholder.jpg" />
    <div className="projectDesc">
    <h3>Lost Cities</h3>
      <p>Online application of Lost Cities 2-Player Card Game, built from scratch to provide real-time multiplayer functionality. 
      </p>
      <h4>Tech Used</h4>
      <ul>
        <li>JavaScript</li>
        <li>Angular</li>
        <li>CSS</li>
        <li>Socket.io</li>
      </ul>
    </div>
  </div>
  <div className="project card">
    <img src="img/placeholder.jpg" />
    <div className="projectDesc"><h3>Check Split</h3>
      <p>Web Application to assist groups in splitting restaurant checks by calculating the necessary tax and tip of each person and  displaying a running total bill for the group</p>
      <h4>Tech Used</h4>
      <ul>
        <li>Java</li>
        <li>Spring Tools Suit</li>
        <li>AJAX</li>
        <li>jQuery</li>
        <li>MySQL</li>
      </ul>
    </div>
  </div>
</div>

)
}
}
