import React from 'react';
import { connect } from 'react-redux';

import { toggleAnswer } from '../actions/index.jsx';

class RevealAnswer extends React.Component {
	constructor(props) {
		super(props);
		this.revealTutorialAnswer = this.revealTutorialAnswer.bind(this);
	}
	revealTutorialAnswer() {
		this.props.toggleAnswer(this.props.challengeId, this.props.challengeType)
	}
  render() {
    if (this.props.challengeType === 'challenge') {
    	return false; 
    } else if (this.props.challengeType === 'tutorial') {
    	if (this.props.revealAnswer) {
    		const { explanation, answer } = this.props.answers;
    		return (
    			<div>
    				<span>{answer}</span>
    				<span>{explanation}</span>
    			</div>
    		)
    	} else {
    		return <button onClick={this.revealTutorialAnswer}>Reveal Answer</button>
    	}
    } else {
    	return false; 
    }
  }
}

export default connect(null, { toggleAnswer })(RevealAnswer)

// RevealAnswer.propTypes = {

// }