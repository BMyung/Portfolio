import React, { Component } from "react";
import Form from "./form"

export default class Contact extends Component {
    render(){
        return (
            <div id="contact" className="page">
  <h1>Contact</h1>
  <p>Let's connect! Feel free to reach out to work together or just to chat.</p>
  <Form></Form>
</div>

        )
    }
}