import React from 'react';
import { connect } from 'react-redux';
import { testRegexInput, inputActionCreator } from '../../actions/index';
import InputValidationFlag from './inputValidationFlag';
import TestPassedButton from './testPassedButton';
import PostAuthentication from './postAuthentication';

class InputRegexValidation extends React.Component {
  constructor(props) {
    super(props);
    this.changeInputState = this.changeInputState.bind(this);
    this.addSlashes = this.addSlashes.bind(this);
  }
  render() {
    const { editable } = this.props;
    const { validInput } = this.props.newUserPost;
    if (!editable || validInput) {
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
              nextUrl={this.props.nextUrl}
              editable={this.props.editable}
              testPassed={this.props.testPassed}
            />
          </form>
          <InputValidationFlag wellFormedInput={this.props.wellFormedInput} />
        </div>
      );
    } else {
      return <PostAuthentication 
        newUserPost={this.props.newUserPost} 
        id="input-pattern" 
        className="input-group"
        />
    }
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
    this.props.testRegexInput(this.props.challengeId, newInput, this.props.challengeType);
  }
}

const mapStateToProps = (state) => {
  return { 
    input: state.userInput, 
    wellFormedInput: state.wellFormedInput,
    newUserPost: state.newUserPost
  };
};

export default connect(mapStateToProps, { testRegexInput, inputActionCreator })(InputRegexValidation);
