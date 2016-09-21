import React, { Component } from 'react';

class Navigation extends Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
        <ul className="nav nav-pills">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tutorial</a></li>
          <li><a href="#">Challenges</a></li>
          <li><a href="#">About</a></li>
        </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
