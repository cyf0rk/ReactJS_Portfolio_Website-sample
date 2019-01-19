import React, {Component} from 'react';

import {Header} from './Header';
import Message from './Message';
import Name from './Name';
import './contact.css';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearScreen: false,
      emailSubmitted: false,
      resetForm: false,
      name: this.props.name,
      email: "",
      errorMessage: "",
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  validate() {
    return (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
    );
  }

  handleBlur(event) {
    if (!this.validate()) {
      this.setState({errorMessage: "A valid email address is required!"})
    } else {
      this.setState({errorMessage: ""});
    }
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    if (!this.validate()) {
      event.preventDefault();
      return;
    } else {
      event.preventDefault();
      this.setState({clearScreen: true, emailSubmitted: true});
    }
  }

  handleReset() {
    this.setState({clearScreen: true, resetForm: true});
  }

  render() {
    if (!this.state.clearScreen) {
      return (
        <div className="form-app">
          <div id="form-app">
            <Header />
            <div className="form-container">
              <div className="user-info">
                <span className="ion-ios-person"></span>
                <span>&nbsp;&nbsp;{this.state.name}</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <span className="ion-ios-mail"></span>
                  <input type="email" value={this.state.value} placeholder="Please enter your email address"
  autofocus="true" onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Next" disabled={!this.validate()} />
                <input type="button" value="Reset" onClick={this.handleReset} />
              </form>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.emailSubmitted) {
      return (
        <Message name={this.state.name} email={this.state.email} />
      );
    }
    if (this.state.resetForm) {
      return (
        <Name />
      );
    }
  }
}

export default Email;
