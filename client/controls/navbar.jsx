import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <div className="navbar-header">
            <a className="navbar-brand logo">Regexcellence</a>
          </div>
          <ul className="nav nav-pills">
            <li><Link to="home">HOME</Link></li>
            <li><Link to="tutorial">TUTORIAL</Link></li>
            <li><Link to="user-challenges">CHALLENGES</Link></li>
            <li><Link to="about">ABOUT</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

