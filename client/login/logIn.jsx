import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Login extends Component {
  // getInititalState(){
  //   return { showModal: false};
  // }
  constructor(props){
    super(props);
    this.state = { showModal: false };

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
    return(
    <div>
        <span onClick={this.open}>SIGN IN</span>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In with Github</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>some text</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }
}


