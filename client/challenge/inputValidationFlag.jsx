import React from 'react';

export default class InputValidationFlag extends React.Component {
  render() {
    if (this.props.wellFormedInput) {
      return false;
    } else {
      return (
        <div>
          <br></br>
          <div className="malformed">
            Error: Please use correct Regex syntax
          </div>
        </div>
      );
    }
  }
}
