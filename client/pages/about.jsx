import React, { Component } from 'react';
import Navigation from '../controls/navbar';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="clear-top">Team</h1>
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
              <div className="about-table">Troy Gibb</div>
            </td>
            <td>
              <div className="about-table">Dana Li</div>
            </td>
            <td>
              <div className="about-table">Benjamin Tran</div>
            </td>
            <td>
              <div className="about-table">Lucy Wonsower</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;
