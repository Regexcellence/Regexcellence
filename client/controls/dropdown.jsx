import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import Login from '../login/logIn';
import { logOut } from '../actions/api';

class Dropdown extends Component {
  render() {
    if (this.props.condition.name){
    	return (
        <li>
        <DropdownButton className="drop-down" title={this.props.userInfo.name} id="bg-nested-dropdown">
          <Link className="drop-down-menu" to="profile">PROFILE</Link>
          <MenuItem className="drop-down-menu" onClick={this.props.logOut}>LOG OUT</MenuItem>
        </DropdownButton>
       </li>
    		);
    } else {
      return <li><Link><Login /></Link></li>;
    }
  }
}

export default connect(null, { logOut })(Dropdown);
