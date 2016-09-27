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

  // componentWillMount() {
  //   this.props.userLogin();
  // }

  render(){
    if(!this.state.loggedIn){     
      return(
      <div>
          <span onClick={this.open}>SIGN IN</span>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In with Github</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <button onClick={this.props.userLogin}>Sign in with Github account</button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
      );
    } else {
      return <div>hey username!</div>;
    }
  }
}

export default connect(null, { userLogin })(Login);
