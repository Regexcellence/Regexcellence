import React, { Component } from 'react';
import { connect } from 'react-redux';
import Challenge from '../challenge/challenge';
import { inputActionCreator } from '../actions/index';

class TutorialMain extends Component {
	constructor(props) {
		super(props);
	}
	getTutorialProps(param) {
		return this.props.challenges.reduce((prev, curr) => {
			if (curr.name === param) {
				return curr;
			} else {
				return prev; 
			}
		}, {});
	}
  render() {
  	if (this.props.challenges.length) {
  		const currentChallenge = this.getTutorialProps(this.props.params.name);
  		return (
  			<div>
	  			<Challenge 
	  			key={currentChallenge._id} 
	  			challengeInfo={currentChallenge} 
	  			nextTutorial={this.props.challenges[currentChallenge.order + 1].name}
	  			/>
  			</div>
  		)
   	} else {
   		return false; 
   	}
	}
}

const mapStateToProps = (state) => {
	return { challenges: state.challenges };
};

export default connect(mapStateToProps, { inputActionCreator })(TutorialMain);
