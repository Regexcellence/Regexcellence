import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { postEditTestCase } from '../../actions/index';

import TestCaseEdit from './testCaseEdit';

class TestCaseText extends React.Component {
  constructor(props) {
    super(props);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.convertSpaces = this.convertSpaces.bind(this);
  }
  enterEditMode() {
    const { task, _id } = this.props.testCaseInfo;
    this.props.postEditTestCase('EDIT-MODE', {
      task,
      _id,
      case: this.props.testCaseInfo.case
    })
  }
  convertSpaces(string) {
    string = string.replace(/\s/g, '\u2022');
    return string; 
  }
  render() {
    let { start, match, end, globalMatch } = this.props.innerMatches;
    if (!globalMatch.length) {
      return (
        <div className="case-text">
          {this.convertSpaces(start)}
          <span className="text-match">{this.convertSpaces(match)}</span>
          {this.convertSpaces(end)}
          {this.props.editable ? <span onClick={this.enterEditMode} className="glyphicon glyphicon-pencil" aria-hidden="true" /> : false }
        </div>
      )
    } else {
      const matches = globalMatch.map((matchObject) => {
        let { start, match } = matchObject;
        if (matchObject.end) {
          return (
            <div key={uuid.v4()} className="case-text">
              {start}
              <span className="text-match">{match}</span>
              {matchObject.end}
              {this.props.editable ? <span onClick={this.enterEditMode} className="glyphicon glyphicon-pencil" aria-hidden="true" /> : false }
            </div>
          )
        } else {
          return (
            <div key={uuid.v4()} className="case-text">
              {start}
              <span className="text-match">{match}</span>
            </div>
          )
        }
      });
      return (
        <div className="case-text">
          {matches}
        </div>
      )
    }
  }
}

export default connect(null, { postEditTestCase })(TestCaseText)