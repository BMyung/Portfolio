import React, { Component } from "react";

export default class Contact extends Component {
    render(){
        return (
            <div id="contact" className="page">
  <h1>Contact</h1>
  <p>Feel free to reach out to work together on potential projects or just to chat!</p>
  <form action="#" method="POST">
    <div>Name:
      <input type="text" />
    </div>
    <div>Email: 
      <input type="email" />
    </div>
    <div>
      Message:
      <textarea defaultValue={""} />
    </div>
  </form>
</div>

        )
    }
}