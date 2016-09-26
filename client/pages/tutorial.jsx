import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navigation from '../controls/navbar';
import Controls from '../controls/controls';
import { getAllTutorials } from '../actions/api';
import Challenge from '../challenge/challenge';

class Tutorial extends Component {
  componentWillMount() {
   this.props.getAllTutorials();
  }
  render() {
    if (this.props.tutorials.length) {
      console.log('tutorials array', this.props.tutorials);
      let firstTutorial;
      this.props.tutorials.forEach((item) => {
        if (item.order === 0) {
          firstTutorial = item.nameurl;
        }
      });
      console.log('pathname in tutorial ', this.props.location.pathname);
      if (this.props.location.pathname === '/tutorial') {
        return (
          <div className="clear-top">
            <div className="tutorial-start">
              <div className="text-center title"><h1>Welcome</h1>
              <p className="tutorial-start">Our tutorial is designed to jump-start your Regex education, taking you from absolute beginner status and putting you well on your way to writing your own challenges for others. If you get stuck, take advantage of the cheat sheet by clicking the icon in the top-right corner. Have fun!
              </p>
              <Link to={"/tutorial/" + firstTutorial}><span className="tutorial-start">START TUTORIAL</span></Link>
            </div>
            </div>
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
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return { tutorials: state.tutorials };
};

export default connect(mapStateToProps, { getAllTutorials })(Tutorial);
