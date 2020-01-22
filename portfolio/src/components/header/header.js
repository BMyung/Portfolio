import React, { Component } from 'react';

export default class Header extends Component { 
    render() {
      return (
  
        <nav id="header">
          <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      );
    }
  };