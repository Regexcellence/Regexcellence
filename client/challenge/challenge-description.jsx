import React, { Component } from 'react';

export default class ChallengeDescription extends Component {
	constructor(props) {
		super(props);
	}
  render() {
  	console.log(this.props.editable)
  	if (this.props.editable) {
  		return (
  		  <div>
  		    <h3><input value={this.props.name} /></h3>
  		    <p><textarea placeholder="Enter A Description" value={this.props.description} /></p>
  		  </div>
  		);
  	} else {
	    return (
	      <div>
	        <h3>{this.props.name}</h3>
	        <p>{this.props.description}</p>
	      </div>
	    );
	  }
  }
}
