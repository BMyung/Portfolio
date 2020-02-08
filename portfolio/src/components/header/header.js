import React, { Component } from 'react';

export default class Header extends Component { 
  constructor (props){
    super (props);
    this.state = {
      responseClass: "header",
    };
    this.myFunction = this.myFunction.bind(this);
  }
    render() {
      return (
  
        <nav id="header" className={this.state.responseClass}>
          <ul>
          <a className="mobileNav" onClick={this.myFunction}>
        <i className="fas fa-bars"></i>
        </a>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      );
    }

    myFunction(e) {
      if (this.state.responseClass==="header"){
        this.setState({responseClass:"responsive"})
      }
      else{
        this.setState({responseClass:"header"})
      }


    }
  };