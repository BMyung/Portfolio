import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="skills" className="skills page">
        <h1>Skills</h1>
        <ul>
          <li>
              <h3>Languages</h3>
              <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML/CSS</li>
              </ul>
          </li>
          <li>
              <h3>Frameworks</h3>
              <ul>
                <li>Angular</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Spring</li>
                <li>Express</li>
                <li>Bootstrap</li>
              </ul>
          </li>
          <li>
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
          </li>
          <li>
              <h3>Other</h3>
              <ul>
                <li>RestAPI</li>
                <li>CRUD Applications</li>
                <li>MVC/MTV</li>
                <li>Node.js</li>
              </ul>
          </li>
        </ul>
      </div>

    )
  }
}