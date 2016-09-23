import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="navbar navbar-static-bottom">
      <hr></hr>
      <div className="text-muted text-center">
        <ul className="footer">
          <li>ABOUT US</li>
          <li>
            <img src="http://i.imgur.com/HO44BWW.png"/>
            GitHub
          </li>
          <li className="logo">R</li>
          <li>© 2016 - Regexcellence</li>

        </ul>
      </div>
      </div>
    );
  }
}

export default Footer;
