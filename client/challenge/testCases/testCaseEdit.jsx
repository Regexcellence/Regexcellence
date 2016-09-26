import React from 'react';
import { connect } from 'react-redux';
import { postEditTestCase } from '../../actions/index';
import uuid from 'uuid';

class TestCaseEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing || false,
      newTestCase: this.props.newTestCase || '',
    }
    this.switchEditMode = this.switchEditMode.bind(this);
    this.addTestCase = this.addTestCase.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.deleteTestCase = this.deleteTestCase.bind(this);
  }
  switchEditMode() {
    this.setState({ editing: !this.state.editing });
  }
  addTestCase() {
    this.props.postEditTestCase('ADD', {
      task: this.props.matchType,
      case: this.state.newTestCase,
      _id: this.props._id || uuid.v4(),
      editing: false
    });
    this.setState({
      newTestCase: '',
      editing: false
    });
  }
  deleteTestCase() {
    this.props.postEditTestCase('DELETE', {
      _id: this.props._id
    });
    this.setState({
      newTestCase: '',
      editing: false
    });
  }
  updateInput(event) {
    this.setState({
      newTestCase: event.target.value
    })
  }
  render() {
    if (this.state.editing) {
      return (
        <tr>
          <td>
          <input onChange={this.updateInput} value={this.state.newTestCase} />
          <span onClick={this.addTestCase} className="glyphicon glyphicon-ok">Save</span>
          <span onClick={this.deleteTestCase} className="glyphicon glyphicon-remove">Remove</span>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>
          <span>Add a {this.props.matchType} test case</span>
          <span onClick={this.switchEditMode} className="glyphicon glyphicon-plus" aria-hidden="true" />
          </td>
        </tr>
      )
    }
  }
}

export default connect(null, { postEditTestCase })(TestCaseEdit)
