import React, { Component } from 'react';
import { connect } from 'react-redux';

import Challenge from '../challenge/challenge';

class UserChallengePost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Challenge
        challengeInfo={this.props.newUserPost}
        editable={true}
        nextUrl={{ url: 'user-challenges', nextText: 'Submit New Challenge!' }}
      />
    );
  }
}
UserChallengePost.propTypes = {
  newUserPost: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    newUserPost: state.newUserPost,
  };
};

export default connect(mapStateToProps)(UserChallengePost);
