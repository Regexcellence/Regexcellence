import React from 'react';
import { connect } from 'react-redux';
import { postEditTestCase } from '../../actions/index';

import TestCaseEdit from './testCaseEdit';

class TestCaseText extends React.Component {
  constructor(props) {
    super(props);
    this.enterEditMode = this.enterEditMode.bind(this);
  }
  enterEditMode() {
    const { task, _id } = this.props.testCaseInfo;
    this.props.postEditTestCase('EDIT-MODE', {
      task,
      _id,
      case: this.props.testCaseInfo.case
    })
  }
  render() {
    const { start, match, end } = this.props.innerMatches;
    return (
      <div className="case-text">
        {start}
        <span className="text-match">{match}</span>
        {end}
        {this.props.editable ? <span onClick={this.enterEditMode} className="glyphicon glyphicon-pencil" aria-hidden="true" /> : false }
      </div>
    )
  }
}

export default connect(null, { postEditTestCase })(TestCaseText)