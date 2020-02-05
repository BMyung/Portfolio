import React, {Component} from 'react';
import emailjs from 'emailjs-com';

export default class Form extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            email: "",
            message: "",
            error: ""
        };
        this.handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
          }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userid = "user_esu8bjskYZyROrQR8Uows"
        this.tempId = "thanksforcontact"
    }
    
    render() {
        return(
            <div id="FormDiv">
            <form id="form" method="POST" onSubmit={this.handleSubmit}>
                <input className="formField" id="name" name="name" type="text"
                    placeholder="Name"
                    onChange = {e => this.handleChange(e)}
                    />
                <input id="email" className="formField" name="email" type="email" 
                    placeholder="E-Mail"
                    onChange = {e => this.handleChange(e)}
                    />
                <textarea id="message" name="message" className="formField" 
                placeholder="Message"
                 onChange = {e => this.handleChange(e)}/>
                <input typeid="submit" className="formField" type="submit" value="Send"></input>
            </form>
            <h3>{this.state.error}</h3>
            </div>

                    )
    }
    handleSubmit(e) {
        const templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        if (templateParams.email == "" || templateParams.name == "" || templateParams.message == ""){
            this.setState({error: "Please complete all fields"})
            e.preventDefault();
        }
        else{
            this.sendEmail(this.tempId, templateParams);
            e.preventDefault();
            this.setState({error:""})
        }
    }

    sendEmail(tempId, templateParams) {
        emailjs.send("default_service", tempId, templateParams, this.userid)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }

}