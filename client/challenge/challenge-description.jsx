import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postChallengeInputUpdate } from '../actions/index';
import Difficulty from './difficulty';

class ChallengeDescription extends Component {
	constructor(props) {
		super(props);
		this.updateInput = this.updateInput.bind(this);
	}
	updateInput(event) {
		const inputObject = {
			name: event.target.name,
			value: event.target.value,
		};
		this.props.postChallengeInputUpdate(inputObject);
	}
  render() {
  	if (this.props.editable) {
  		return (
  		  <div>
  		    <h3><input onChange={this.updateInput} name="name" value={this.props.name} /></h3>
  		    <Difficulty difficulty={this.props.difficulty} editable={this.props.editable} />
  		    <textarea 
  		    onChange={this.updateInput}
  		    name="description" 
  		    placeholder="Enter A Description" 
  		    value={this.props.description} 
  		    />
  		  </div>
  		);
  	} else {
	    return (
	      <div>
	        <h3>{this.props.name}</h3>
	        <Difficulty difficulty={this.props.difficulty} />
	        <p>{this.props.description}</p>
	      </div>
	    );
	  }
  }
}

export default connect(null, { postChallengeInputUpdate })(ChallengeDescription)