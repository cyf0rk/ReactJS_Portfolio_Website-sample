import React, {Component} from 'react';

import './contact.css';
import * as emailjs from 'emailjs-com';

class Submitconfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearScreen: false,
      messageSubmitted: false,
      resetForm: false,
      name: this.props.name,
      email: this.props.email,
      message: this.props.message,
      errorMessage: "",
    };

    this.sentMessage = this.sentMessage.bind(this);
  }

  sentMessage(event) {
    let templateParams = {
      from_name: this.state.name + '(' + this.state.email + ')',
      message_html: this.state.message
    }

    emailjs.send('Email Service', 'TEMPLATE_ID', templateParams, 'USER_ID')
  }

  render () {
    return (
      <div className="form-app">
        {this.sentMessage()}
        <div id="form-app">
          <p className="submit-message">Thank you for reaching out!</p>
          <p className="submit-message">Your email has been submitted and I will be in touch with you shortly.</p>
          <br />
          <h3>Your Message:</h3>
          <br />
          <div className="user-info">
            <span className="ion-ios-person"></span>
            <small>&nbsp;&nbsp;{this.props.name}</small>
          </div>
          <br/>
          <div className="user-info">
            <span className="ion-ios-mail"></span>
             <small>&nbsp;&nbsp;{this.props.email}</small>
          </div>
          <br />
          <div className="user-info">
            <span className="ion-ios-create"></span>
            <small>&nbsp;&nbsp;{this.props.message}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Submitconfirm;
