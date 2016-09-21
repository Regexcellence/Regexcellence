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
  	console.log(this.props.location.pathname)
    if (this.props.challenges.length) {
      console.log('***', this.props.challenges);
      const firstTutorial = this.props.challenges[0].name;
      return (
        <div>
          <Navigation />
          <h1>This is the Tutorial page</h1>
          <Link to={"/" + firstTutorial}>First Tutorial Here</Link>
          {this.props.children}
        </div>
      );      
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllChallenges })(Tutorial);
