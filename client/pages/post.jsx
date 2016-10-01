import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserChallengePost from '../user-posts/post-form';

import quill from '../styles/images/quill.png';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron post-header">
          <img className="banner-img" src={quill} />
          <h2>
            Thank you for your contribution. 
          </h2>
          <p> - Regi, the Regexcellence dog</p>
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
