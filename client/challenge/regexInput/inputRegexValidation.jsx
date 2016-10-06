import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { testRegexInput, inputActionCreator } from '../../actions/index';
import InputValidationFlag from './inputValidationFlag';
import TestPassedButton from './testPassedButton';
import PostAuthentication from './postAuthentication';
import Notification from './completeNotification.jsx';

class InputRegexValidation extends React.Component {
  constructor(props) {
    super(props);
    this.changeInputState = this.changeInputState.bind(this);
  }

  componentDidMount(){
    const { authenticatedInput, editable } = this.props;
    if (authenticatedInput || !editable) {
      ReactDOM.findDOMNode(this.refs.regexInput).focus();
      this.refs.regexInput.setSelectionRange(1,1);
    }
  }

  changeInputState(event) {
    event.preventDefault();
    const newInput = event.target.value;
    if(this.refs.regexInput.value==='//'){
      ReactDOM.findDOMNode(this.refs.regexInput).focus();
      this.refs.regexInput.setSelectionRange(1,1);
    }
    this.props.inputActionCreator(newInput);
    this.props.testRegexInput(this.props.challengeId, newInput, this.props.challengeType);
  }

  render() {
    const { editable, tutorialOrder } = this.props;
    const { authenticatedInput } = this.props.newUserPost;
    if (!editable || authenticatedInput) {
      return (
        <div>
          <h4> <span className="white-space">&#183;</span> = whitespace</h4>
          <form id="input-pattern" className="input-group">
            <input
              ref="regexInput"
              className="form-control"
              placeholder="enter your pattern here..."
              value={this.props.input ? this.props.input : '//'}
              onChange={this.changeInputState} 
            />
            <TestPassedButton
              nextUrl={this.props.nextUrl}
              editable={this.props.editable}
              testPassed={this.props.testPassed}
              challengeType={this.props.challengeType}
              tutorialOrder={tutorialOrder}
              challengeId={this.props.challengeId}
            />
          </form>
          <InputValidationFlag wellFormedInput={this.props.wellFormedInput} />
        <div>
          <Notification 
            testPassed={this.props.testPassed}
          />
        </div>
        </div>
      );
    } else {
      return <PostAuthentication newUserPost={this.props.newUserPost} />
    }
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
