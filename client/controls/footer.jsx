import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="navbar navbar-static-bottom">
      <hr></hr>
      <div className="text-center">
        <ul className="footer">
          <li><Link to="about">ABOUT US</Link></li>
          <li>

            <a target="_blank" href="https://github.com/Regexcellence/Regexcellence">
            <i className="fa fa-github"></i>
              GitHub
            </a>
          </li>
          <li className="logo"><Link to="">R</Link></li>
          <li>© 2016 - Regexcellence | San Francisco CA</li>

        </ul>
      </div>
      </div>
    );
  }
}

export default Footer;
