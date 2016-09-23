import React, { Component } from 'react';
// TODO: Bootstrap table can take classes .table-danger and .table-success to highlight entire row
// based on success of test. Should we do?

export default class TestCase extends Component {
  render() {
    const flag = this.props.flag;
    const inline = { display: 'inline-block'}
    if (flag === true) {
      const divStyle = { color: 'green', display: 'inline-block' };
      return (
        <div style={divStyle}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true" />
        </div>
      );
    } else if (flag === false) {
      const divStyle = { color: 'red', display: 'inline-block' };
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
