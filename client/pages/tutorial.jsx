import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navigation from '../controls/navbar';
import Controls from '../controls/controls';
import { getAllChallenges } from '../actions/index';
import Challenge from '../challenge/challenge';

class Tutorial extends Component {
  componentWillMount() {
   this.props.getAllChallenges();
  }
  render() {
    if (this.props.challenges.length) {
      const firstTutorial = this.props.challenges[0].name;
      console.log('pathname in tutorial ', this.props.location.pathname)
      if (this.props.location.pathname === '/tutorial') {
        return (
          <div>
            <Navigation />
            <h1>This is the Tutorial page</h1>
            <Link to={"/" + firstTutorial}>First Tutorial Here</Link>
          </div>
        );
      } else {
        return (
          <div>
            <Navigation />
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

export default connect(mapStateToProps, { getAllChallenges })(Tutorial);
