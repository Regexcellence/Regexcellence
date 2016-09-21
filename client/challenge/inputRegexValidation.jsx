import React from 'react';
import { connect } from 'react-redux';
import { flagActionCreator, inputActionCreator } from '../actions/index';
import InputValidationFlag from './inputValidationFlag';
import TestPassedButton from './testPassedButton';

class InputRegexValidation extends React.Component {
  constructor(props) {
    super(props);
    this.changeInputState = this.changeInputState.bind(this);
    this.addSlashes = this.addSlashes.bind(this);
  }
  render() {
    return (
      <div>
        <form id="input-pattern" className="input-group">
          <input
            className="form-control"
            placeholder="enter your pattern here..."
            value={this.props.input}
            onChange={this.changeInputState}
            onFocus={this.addSlashes}
          />
          <TestPassedButton 
            nextTutorial={this.props.nextTutorial} 
            testPassed={this.props.testPassed} 
          />
        </form>
        <InputValidationFlag wellFormedInput={this.props.wellFormedInput} />
      </div>
    );
  }
  addSlashes(event) {
    if (!event.target.value.length) {
      this.props.inputActionCreator('//'); 
    }
  }
  changeInputState(event) {
    event.preventDefault();
    const newInput = event.target.value;
    this.props.inputActionCreator(newInput);
    this.props.flagActionCreator(this.props.challengeId, newInput);
  }
}

const mapStateToProps = (state) => {
  return { input: state.userInput, wellFormedInput: state.wellFormedInput };
};

export default connect(mapStateToProps, { flagActionCreator, inputActionCreator })(InputRegexValidation);