import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navigation from '../controls/navbar';
import Controls from '../controls/controls';
import { getAllTutorials } from '../actions/api';
import Challenge from '../challenge/challenge';
import book from '../styles/images/book.png';

class Tutorial extends Component {
  componentWillMount() {
   this.props.getAllTutorials();
  }
  render() {
    if (this.props.tutorials.length) {
      let firstTutorial;
      this.props.tutorials.forEach((item) => {
        if (item.order === 0) {
          firstTutorial = item.nameurl;
        }
      });
      if (this.props.location.pathname === '/tutorial') {
        return (
          <div>
            <div className="jumbotron tutorial-start">
              <img className="banner-img" src={book} />
              <h2>Welcome</h2>
              <p>Jump-start your Regex education from absolute beginner status to writing your own challenges for others. If you get stuck, take advantage of the cheat sheet. Have fun!
              </p>
            </div>

            <br/>
            <div className="tutorial-start container">
              <Link to={"/tutorial/" + firstTutorial}>START NOW</Link>
            </div>
            <br/>

          </div>
        );
      } else {
        return (
          <div>
            {this.props.children}
          </div>
        )
      }
    } else {
      return false;
    }
  }
}

const mapStateToProps = (state) => {
  return { tutorials: state.tutorials };
};

export default connect(mapStateToProps, { getAllTutorials })(Tutorial);
