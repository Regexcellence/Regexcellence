import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Cheatsheet from '../pages/cheatsheet';
import Footer from '../controls/footer';
import Dropdown from './dropdown';
import { getUserInfo } from '../actions/api';

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
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/384216.svg?Expires=1475194837&Signature=ZqoVjMsoIGEYP9dyGBWbzjnRTwc7dvprh7E7gxD~VcMrSj3i77-JK8NgciSueDCPdraCRfTjJ0aiCUdvHJox3ZyyylN-T6wh9ghhekSTI8g2PbRcyuX3YJilZwkyrL2WBKiKaMT4nDEqQeolud7BESRQiwKpUmOrsytij07QhVA_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q" style={sizing} />
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
