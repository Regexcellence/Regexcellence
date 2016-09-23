import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="navbar navbar-static-bottom">
      <hr></hr>
      <div className="text-muted text-center">
        <ul className="footer">
          <li className="pull-left">ABOUT US</li>
          <li className="pull-left">
            <img src="http://i.imgur.com/HO44BWW.png"/>
            GitHub
          </li>
          <li className="pull-left logo">R</li>
          <li className="pull-left">© 2016 Regexcellence</li>

        </ul>
      </div>
      </div>
    );
  }
}

export default Footer;
