import React, { Component } from 'react';
import Navigation from '../controls/navbar';
import UserChallengePost from '../user-posts/post-form';

class Post extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>This is the post page</h1>
        <br />
        <UserChallengePost />
      </div>
    );
  }
}

export default Post;
