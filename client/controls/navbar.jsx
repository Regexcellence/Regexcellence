import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Cheatsheet from '../pages/cheatsheet';
import Footer from '../controls/footer';
import Dropdown from './dropdown';
import { getUserInfo } from '../actions/api';
import hound from '../styles/dog.png';

class Navbar extends Component {
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
  componentWillMount() {
    this.props.getUserInfo();
  }

  render() {
    let sizing = {
      width: "100px",
      height: "100px",
      float: "left",
    }
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
        <img src={hound} style={sizing} />
        <div className="container">
        <Link to="" className="navbar-header navbar-brand logo">Regexcellence</Link>
        <div>
          <ul className="nav nav-pills pull-right">
            <li><Link to="tutorial">TUTORIAL</Link></li>
            <li><Link to="user-challenges">CHALLENGES</Link></li>
            <li><Link to="post">POST</Link></li>
            <Dropdown 
              condition={this.props.userInfo}
              userInfo={this.props.userInfo} />
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

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps, { getUserInfo })(Navbar);
