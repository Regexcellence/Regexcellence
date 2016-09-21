import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
class Navigation extends Component {

  render(){
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
        <ul className="nav nav-pills">
          <li><Link to="/">Home</Link></li>
          <li><a onClick={() => browserHistory.push('tutorial')}>Tutorial</a></li>
          <li><a>Challenges</a></li>
          <li><Link to="about">About</Link></li>

        </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
