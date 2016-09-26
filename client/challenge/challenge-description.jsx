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
  		  <div className="form-group post-form">
        <form>
          <label>Challenge Name</label>
          <input 
          onChange={this.updateInput} name="name" 
          value={this.props.name}/>

  		    <Difficulty difficulty={this.props.difficulty} editable={this.props.editable} />

          <label>Description:</label>
  		    <textarea className="form-control"
  		    onChange={this.updateInput}
  		    name="description" 
  		    value={this.props.description} 
  		    />
        </form>
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
