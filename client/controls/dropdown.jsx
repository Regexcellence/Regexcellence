import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import Login from '../login/logIn';
import { logOut } from '../actions/api';

class Dropdown extends Component {
	constructor(props){
		super(props);
		this.clickHandle = this.clickHandle.bind(this);
	}
	clickHandle() {
		this.props.logOut();
	}
  render() {
    if (this.props.condition.name){
    	return (
        <li>
        <DropdownButton className="nav-pills" title={this.props.userInfo.name} id="bg-nested-dropdown">
          <MenuItem><Link to="profile">PROFILE</Link></MenuItem>
          <MenuItem onClick={this.props.logOut}>Log Out</MenuItem>
        </DropdownButton>
       </li>
    		);
    } else {
      return <li><Link><Login /></Link></li>;
    }
  }
}

export default connect(null, { logOut })(Dropdown);