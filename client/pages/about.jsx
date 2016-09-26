import React, { Component } from 'react';
import Navigation from '../controls/navbar';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="clear-top jumbotron">Team Regexcellence</h1>
        <table className="about-table">
          <tbody>
          <tr>
          <td>
            <img className="about-img" src="https://avatars3.githubusercontent.com/u/18633748" />
          </td>
          <td>
            <img className="about-img" src="https://avatars3.githubusercontent.com/u/17036705" />
          </td>
          <td>
            <img className="about-img" src="https://avatars1.githubusercontent.com/u/13708462" />
          </td>
          <td>
            <img className="about-img" src="https://avatars2.githubusercontent.com/u/16870016" />
          </td>
          </tr>
          <tr>
            <td>
              <div className="about-table">TROY GIBB</div>
              <div><a href="https://github.com/troygibb">
                <img className="about-links" src="http://i.imgur.com/HO44BWW.png"/></a>
              <a href="https://www.linkedin.com/in/troygibb">
                <img className="about-links" src="http://files.site-fusion.co.uk/webfusion161987/image/linkedin_icon_square.png" />
              </a>
              </div>
            </td>
            <td>
              <div className="about-table">DANA LI</div>
              <div><a href="https://github.com/hellodanali">
                <img className="about-links" src="http://i.imgur.com/HO44BWW.png"/></a>
              <a href="https://www.linkedin.com/in/dana-li-76850320">
                <img className="about-links" src="http://files.site-fusion.co.uk/webfusion161987/image/linkedin_icon_square.png" />
              </a>
              </div>
            </td>
            <td>
              <div className="about-table">BENJAMIN TRAN</div>
              <div><a href="https://github.com/bbtran">
                <img className="about-links" src="http://i.imgur.com/HO44BWW.png"/></a>
              <a href="https://www.linkedin.com/in/bbtran">
                <img className="about-links" src="http://files.site-fusion.co.uk/webfusion161987/image/linkedin_icon_square.png" />
              </a>
              </div>
            </td>
            <td>
              <div className="about-table">LUCY WONSOWER</div>
              <div><a href="https://github.com/lwonsower">
                <img className="about-links" src="http://i.imgur.com/HO44BWW.png"/></a>
              <a href="https://www.linkedin.com/in/lwonsower">
                <img className="about-links" src="http://files.site-fusion.co.uk/webfusion161987/image/linkedin_icon_square.png" />
              </a>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;
