import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { userLogin } from '../actions/api';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = { showModal: false, loggedIn: false };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }

  close() {
    this.setState({ showModal: false});
  }

  open(){
    this.setState({ showModal: true});
  }

  render(){
    if(!this.state.loggedIn){     
      return(
      <div>
          <span onClick={this.open}>SIGN IN</span>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
            <div className="logo">R</div>
            </Modal.Header>
            <Modal.Body>
              <a href="/regex/auth/github">
              <span className="fa fa-github"></span> Sign in with Github</a>
              <div>
              Or continue as a guest
              </div>
            </Modal.Body>
          </Modal>
      </div>
      );
    } else {
      return <div>hey username!</div>;
    }
  }
}

export default connect(null, { userLogin })(Login);
