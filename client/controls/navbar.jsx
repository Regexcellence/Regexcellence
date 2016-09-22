import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <div className="navbar-header">
            <a className="navbar-brand" style={{ font: 'Lavanderia' }}>Regexcellence</a>
          </div>
          <ul className="nav nav-pills">
            <li><Link to="home">Home</Link></li>
            <li><Link to="tutorial">Tutorial</Link></li>
            <li><Link>Challenges</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

