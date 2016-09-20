import React from 'react';
import {connect} from 'react-redux';
import {flagActionCreator, inputActionCreator} from '../actions/index';

class InputRegexValidation extends React.Component {
  constructor(props) {
      super(props);
      this.checkRegex = this.checkRegex.bind(this);
      this.setFlag = this.setFlag.bind(this);
      this.setAllFlags = this.setAllFlags.bind(this);
      this.changeInputState = this.changeInputState.bind(this);
      this.regexParser = this.regexParser.bind(this);
      this.snagRegexFlags = this.snagRegexFlags.bind(this);
      this.regexValidator = this.regexValidator.bind(this);
  }
  render() {
    return (
      <form className="input-group">
        <input
          className="form-control"
          placeholder="enter your pattern here..."
          value={this.props.input}
          onChange={this.changeInputState}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            submit
          </button>
        </span>
      </form>
      );
  }
  // REGEX RELATED FUNCTIONS
  // regexparser is called here; regexvalidator
  // To grab the flags at the end of a regex pattern (i.e. after the second forward slash)
  snagRegexFlags(input) {
      const flags = input.match(/\/([gimuy]{1,5})$/);
      return flags
          ? flags[1]
          : null;
  }
  // Strips input pattern of both forward slashes, and separates flags if any.
  regexParser(input) {
      const inputArr = input.split('');
      // To take off first forward slash.
      inputArr.shift();
      // To take off second forward slash plus any flags that may exist.
      const pattern = inputArr.join('').replace(/\/.*$/, '');
      const flags = this.snagRegexFlags(input);
      return {pattern, flags};
  }
  checkRegex(parsedInput, testCases = this.props.testCases) {
      // To check to see if there are flags in the pattern,
      // as the RegExp instantiator doesn't allow a null/false value for flags.
      const regex = parsedInput.flags
          ? new RegExp(parsedInput.pattern, parsedInput.flags)
          : new RegExp(parsedInput.pattern);
      let passed = true;
      testCases.forEach((test) => {
          if (regex.test(test.case) !== test.expectation) {
              passed = false;
              this.setFlag(test, false);
          } else {
              this.setFlag(test, true);
          }
      });
      console.log('***passed***', passed);
      return passed;
  }

  // END OF REGEX RELATED FUNCTIONS
  // To set individual flags to null, true or false.
  setFlag(itemToChange, flagValue) {
      this.props.flagActionCreator(itemToChange, flagValue);
  }
  // To set all flags to null, true, or false based on current situation.
  setAllFlags(testCases, flagValue) {
      testCases.forEach(test => this.setFlag(test, flagValue));
  }
  // Validates whether the input was a properly formed regex.
  regexValidator(input) {
      return /^\/.+\/[gimuy]{0,5}$/.test(input);
  }
  changeInputState(event) {
      event.preventDefault();
      const newInput = event.target.value;
      this.props.inputActionCreator(newInput);
      if (this.regexValidator(newInput)) {
          this.checkRegex(this.regexParser(newInput));
      } else if (!this.props.input) {
          // For reseting flags to null when there's no input.
          this.setAllFlags(this.props.testCases, null);
      } else {
          this.setAllFlags(this.props.testCases, false);
      }
  }
}

const mapStateToProps = (state) => {
  return { input: state.userInput };
};

export default connect(mapStateToProps, { flagActionCreator, inputActionCreator })(InputRegexValidation);
