import React from 'react';
import { connect } from 'react-redux';

export default class PostAuthentication extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="invalid-post"><span>Not a valid new post</span></div>
  }
}

