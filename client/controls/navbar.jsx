import React, { Component } from 'react';
import { Link } from 'react-router';

import Cheatsheet from '../pages/cheatsheet';
import Footer from '../controls/footer';

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
            // <li className="pull-right">
            //   <button onClick={() => this.showCheatSheet()}>
            //   Cheatsheet
            //   </button>
            // </li>
  render() {
    return (
      <div>
        <nav className="navbar-fixed-top navbar navbar-light bg-faded">
          <div className="navbar-header">
            <Link to="" className="navbar-brand logo">Regexcellence</Link>
          </div>
          <ul className="nav nav-pills pull-right">
            <li><Link to="tutorial">TUTORIAL</Link></li>
            <li><Link to="user-challenges">CHALLENGES</Link></li>
            <li><Link to="about">ABOUT</Link></li>
            <li><Link to="post">POST</Link></li>
          </ul>
          { this.state.showCheatSheet ? <Cheatsheet /> : null }
        </nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
