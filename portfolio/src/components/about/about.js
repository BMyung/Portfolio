import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return (
            <div className="page about" id="about">
                <img src="img/bmprofile.jpg" alt="bryan myung headshot"/>
                <div className="desc"> <h1>About Me</h1>
                    <p>Hi, I'm Bryan, a full stack web developer based in Los Angeles, California. 
                    I have over 1000 hours of hands on coding experience with JavaScript, Python, Java, and I am always excited to learn more. Let's build something together!</p>
                </div>
            </div>

        )
    }
}