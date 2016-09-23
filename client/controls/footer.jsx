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
            <img src="http://i.imgur.com/HO44BWW.png"/>
              GitHub
            </a>
          </li>
          <li className="logo" onClick={()=>{window.scrollTo(0,0)}}>R</li>
          <li>© 2016 - Regexcellence</li>

        </ul>
      </div>
      </div>
    );
  }
}

export default Footer;
