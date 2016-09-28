import React from 'react';
import { connect } from 'react-redux';

export default class PostAuthentication extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="invalid-post">Not a valid new post</div>
  }
}

