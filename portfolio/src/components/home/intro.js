import React, {Component } from 'react';

export default class Intro extends Component {
    render(){
        return (
            <div className="page intro" id="intro">
  <h2>Meet...</h2>
  <h1>Bryan Myung</h1>
  <ul className="links">
    <li><a href="http://www.github.com/Bmyung" target="_blank">
        <i className="fab fa-github fa-2x" aria-hidden="true" /></a>
    </li>
    <li><a href="http://www.linkedin.com/in/bryan-myung" target="_blank">
        <i className="fab fa-linkedin fa-2x" aria-hidden="true" /></a>
    </li>
  </ul>
</div>

        )
    }
}