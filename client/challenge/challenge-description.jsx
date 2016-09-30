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
    const { editable } = this.props;
    if (editable) {
      return (
        <div className="form-group post-form">
          <form>
            <h3>Challenge Name { editable ? <span id="post-requirements">*Required</span> : false }</h3>
            <input
              onChange={this.updateInput} name="name"
              value={this.props.name}
            />
            <div>
              { editable ? <Difficulty editable={editable} difficulty={this.props.difficulty}/> : null }
            </div>

            <h4>Description: { editable ? <span id="post-requirements">*Required</span> : false }</h4>
            <textarea
              className="form-control"
              onChange={this.updateInput}
              name="description"
              value={this.props.description}
            />
          </form>
        </div>
      );
    } else {
      return (
        <div className="challenge-header">
          <h3>{this.props.name}</h3>
          <Difficulty 
            difficulty={this.props.difficulty}
            challengeType ={this.props.challengeType}
          />
          <p>{this.props.description}</p>
        </div>
      );
    }
  }
}

export default connect(null, { postChallengeInputUpdate })(ChallengeDescription);
