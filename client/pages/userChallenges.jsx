import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../controls/navbar';
import ListView from '../userChallenges/listView';
import { getAllChallenges } from '../actions/index';

class UserChallenges extends Component {
  componentWillMount() {
    this.props.getAllChallenges();
  }
  render() {
    if(this.props.challenges.length){
      console.log('***user challenges: ', this.props.challenges);
      return (
        <div>
          <Navigation />
          <h1 className="text-center">User Challenges Page</h1>
          <ListView userChallenges={this.props.challenges} />
        </div>
      );
    }
    else{
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllChallenges })(UserChallenges);


