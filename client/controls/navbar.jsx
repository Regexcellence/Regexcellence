import React, { Component } from 'react';
import { Link } from 'react-router';

import Cheatsheet from '../pages/cheatsheet';
import Footer from '../controls/footer';
import Login from '../login/login';

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
        <nav className="navbar-fixed-top navbar navbar-light bg-faded">
        <div className="container">

        <Link to="" className="navbar-header navbar-brand logo">Regexcellence</Link>
        <div>
          <ul className="nav nav-pills pull-right">
            <li><Link to="tutorial">TUTORIAL</Link></li>
            <li><Link to="user-challenges">CHALLENGES</Link></li>
            <li><Link to="post">POST</Link></li>
            <li><Link><Login /></Link></li>

          </ul>
          { this.state.showCheatSheet ? <Cheatsheet /> : null }
        </div>
        </div>
        </nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
