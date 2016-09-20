import React from 'react';
import { connect } from 'react-redux';
import { flagActionCreator, inputActionCreator } from '../actions/index';

class InputRegexValidation extends React.Component {
  constructor(props) {
    super(props);
    this.changeInputState = this.changeInputState.bind(this);
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
