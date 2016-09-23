import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navigation from '../controls/navbar';
import Controls from '../controls/controls';
import { getAllTutorial } from '../actions/index';
import Challenge from '../challenge/challenge';

class Tutorial extends Component {
  componentWillMount() {
   this.props.getAllTutorial();
  }
  render() {
    if (this.props.challenges.length) {
      console.log('challenges array', this.props.challenges);
      let firstTutorial;
      this.props.challenges.forEach((item) => {
        if (item.order === 0) {
          firstTutorial = item.nameurl;
        }
      });
      console.log('pathname in tutorial ', this.props.location.pathname)
      if (this.props.location.pathname === '/tutorial') {
        return (
          <div>
            <h1 className="text-center title">Welcome</h1>
            <div className="intro">Regular Expressions have been around since the 50s, but it wasn’t until the 80s that the regex we know and love today really started to develop. A lot of the patterns and syntax was designed specifically to work with Perl, and you will still sometimes hear the term Perl-style thrown around. Luckily regex works well with a myriad of languages today, and honing your skills will help you become an all-around phenomenal programer!<br></br>
            <Link to={"/tutorial/" + firstTutorial}>First Tutorial Here</Link>
            </div>
            {this.props.children}
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
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllTutorial })(Tutorial);
