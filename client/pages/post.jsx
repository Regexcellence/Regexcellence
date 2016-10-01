import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserChallengePost from '../user-posts/post-form';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center title">This is the post page</h1>
        </div>
        <br />
        <div className='post'>
          <UserChallengePost />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testPassed: state.newUserPost.testPassed
  }
}

export default connect(mapStateToProps)(Post);
