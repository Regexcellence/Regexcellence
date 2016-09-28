import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserInfoToPost } from '../actions/index';

import Challenge from '../challenge/challenge';

class UserChallengePost extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { gitHandle, _id } = this.props.userInfo;
    if (gitHandle) {
      this.props.addUserInfoToPost(gitHandle, _id);
    }
  }
  render() {
    console.log(this.props.newUserPost);
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
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, { addUserInfoToPost })(UserChallengePost);
