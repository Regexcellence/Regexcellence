import React, { Component } from 'react';

export default class TestCase extends Component {
  render() {
    const flag = this.props.flag;
    if (flag === true) {
      const divStyle = { color: 'green' };
      return (
        <div style={divStyle}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true" />
        </div>
      );
    } else if (flag === false) {
      const divStyle = { color: 'red' };
      return (
        <div style={divStyle}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true" />
        </div>
      );
    } else {
      return <div> </div>;
    }
  }
}
