import React from 'react';

export default class TestCaseEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.switchEditMode = this.switchEditMode.bind(this);
  }
  switchEditMode() {
    this.setState({ editing: !this.state.editing });
  }
  render() {
    if (this.state.editing) {
      return (
        <tr>
          <input name="testCases"/>
          <span onClick={this.switchEditMode}>Done editing</span>
        </tr>
      )
    } else {
      return (
        <tr>
          <span onClick={this.switchEditMode}>Edit me!</span>
        </tr>
      )
    }
  }
}