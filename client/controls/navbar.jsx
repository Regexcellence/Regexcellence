import React, { Component } from 'react';
import { Link } from 'react-router';

import Cheatsheet from '../pages/cheatsheet';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheatSheet: false,
    };
    this.showCheatSheet = this.showCheatSheet.bind(this);
  }
  showCheatSheet() {
    this.setState({ showCheatSheet: !this.state.showCheatSheet }); 
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <div className="navbar-header">
            <a className="navbar-brand logo">Regexcellence</a>
          </div>
          <ul className="nav nav-pills pull-right">
            <li><Link to="home">HOME</Link></li>
            <li><Link to="tutorial">TUTORIAL</Link></li>
            <li><Link to="user-challenges">CHALLENGES</Link></li>
            <li><Link to="about">ABOUT</Link></li>
            <li className="pull-right">
              <button onClick={() => this.showCheatSheet()}>
              Cheatsheet
              </button>
            </li>
          </ul>
          { this.state.showCheatSheet ? <Cheatsheet /> : null }
        </nav>
        {this.props.children}
      </div>
    );
  }
}

