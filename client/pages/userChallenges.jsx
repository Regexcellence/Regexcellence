import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from '../userChallenges/listView';
import { getAllChallenges } from '../actions/api';
import arrows from '../styles/images/arrows.png';

class UserChallenges extends Component {
  componentWillMount() {
    this.props.getAllChallenges();
  }
  render() {
    if (this.props.challenges.length) {
      return (
        <div>
          <div className="jumbotron">
            <img className="banner-img" src={arrows} />
            <h1>
            Challenge Yourself !
            </h1>
            <p className="lead">Pratice your Regex skills at our challenges page!</p>
          </div>
          { this.props.children || <ListView userChallenges={this.props.challenges} />}
        </div>
      );
    }
    else {
      return false;
    }
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllChallenges })(UserChallenges);
