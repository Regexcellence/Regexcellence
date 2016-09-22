import React from 'react';

export default class TestCaseList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (typeof this.props.testCase === 'object') {
			const testCaseObject = this.props.testCase;
			return (
				<div>
					{testCaseObject.start}
					<span className="text-match">{testCaseObject.match}</span>
					{testCaseObject.end}
				</div>
			)
		} else {
			return <span>{this.props.testCase}</span>
		}
	}
}