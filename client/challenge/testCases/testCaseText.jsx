import React from 'react';
import { connect } from 'react-redux';
import { postEditTestCase } from '../../actions/index';

class TestCaseText extends React.Component {
	constructor(props) {
		super(props);
		this.enterEditMode = this.enterEditMode.bind(this);
	}
	enterEditMode() {
		console.log('in enter mode!')
		const { task, _id } = this.props.testCaseInfo;
		// 'EDIT-MODE'
		this.props.postEditTestCase('EDIT-MODE', {
			task,
			_id,
			case: this.props.testCaseInfo.case
		})
	}
	render() {
		if (typeof this.props.testCase === 'object') {
			const testCaseObject = this.props.testCase;
			return (
				<div>
					{testCaseObject.start}
					<span className="text-match">{testCaseObject.match}</span>
					{testCaseObject.end}
					{this.props.editable ? <span onClick={this.enterEditMode} className="glyphicon glyphicon-pencil" aria-hidden="true" /> : false }
				</div>
			)
		} else {
			return (
				<span>
					{this.props.testCase}
					{this.props.editable ? <span onClick={this.enterEditMode} className="glyphicon glyphicon-pencil" aria-hidden="true" /> : false }
				</span>
			)
		}
	}
}

export default connect(null, { postEditTestCase })(TestCaseText)