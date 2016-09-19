import React from 'react';
import TestCase from '../components/testCase';

export default class TestCaseList extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.challengeInfo.map(item => (
				  <tr key={item.id}>
				    <td>{item.task}</td>
				    <td>{item.case}</td>
				    <td><TestCase flag={item.result} /></td>
				  </tr>
				))}
			</tbody>
		)
	}
}