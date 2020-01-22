import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return (
            <div className="page" id="about">
                <img id="headshot" src="img/bryan-myung_270x300.jpg" />
                <div><h1>About Me</h1>
                    <p>Hi, I'm Bryan, a full stack web developer based in Los Angeles, California. I have experience with JavaScript, Python, Java, and I am always excited to learn more. Let's build something together!</p>
                </div>
            </div>

        )
    }
}