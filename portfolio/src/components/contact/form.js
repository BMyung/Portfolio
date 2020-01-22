import React, {Component} from 'react';

export default class Form extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
    }

    render() {
        return(
            <div id="FormDiv">
            <form id="form" action="#">
                <input className="formField" id="name" type="text" placeholder="Name"/>
                <input id="email" className="formField" type="email" placeholder="E-Mail"/>
                <textarea id="message" className="formField" placeholder="Message" defaultValue={""} />
                <input id="submit" className="formField" type="submit" value="Send"></input>
            </form>
                        </div>

                    )
    }
}