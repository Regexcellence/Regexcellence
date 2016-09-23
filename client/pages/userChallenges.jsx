import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from '../userChallenges/listView';
import { getAllChallenges } from '../actions/index';

class UserChallenges extends Component {
  componentWillMount() {
    this.props.getAllChallenges();
  }
  render() {
    if (this.props.challenges.length) {
      console.log('***user challenges: ', this.props.challenges);
      return (
        <div>
          <div className="jumbotron clear-top">
            <img className="banner-img" src="http://static1.squarespace.com/static/51a9aa9fe4b02f35a70e4fb5/52edec83e4b03137dd9c38c3/52f5763ee4b0021595ac9139/1391818331083/icon-illus-v2.png?format=300w" />
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
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllChallenges })(UserChallenges);
