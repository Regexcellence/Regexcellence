import React, { Component } from 'react';
// TODO: Bootstrap table can take classes .table-danger and .table-success to highlight entire row
// based on success of test. Should we do?
// TODO: Move styling here into css. 

export default class TestCaseFlag extends Component {
  render() {
    const flag = this.props.flag;
    if (flag === true) {
      return <span 
        className="pass-flag pull-right glyphicon glyphicon-ok" 
        aria-hidden="true" 
        />
    } else if (flag === false) {
      return <span 
        className="fail-flag pull-right glyphicon glyphicon-remove" 
        aria-hidden="true" 
        />
    } else {
      return false;
    }
  }
}
