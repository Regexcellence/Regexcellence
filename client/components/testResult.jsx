import React, { Component } from 'react';

export default class TestResult extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let flag = this.props.flag;

    if (flag === null) {
      return <div> WORKS </div>
    }
  }
}
