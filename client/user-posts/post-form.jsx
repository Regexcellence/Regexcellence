import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChallengeActionCreator } from '../actions/index';

import Challenge from '../challenge/challenge';

class UserChallengePost extends Component {
  constructor(props) {
    super(props);
    this.submitPost = this.submitPost.bind(this);
  }
  submitPost() {
    const postInfo = {
      name: this.name.value,
      author: this.author.value,
      difficulty: this.difficulty.value,
      description: this.description.value,
      testCases: {
        task: this.task.value,
      },
    };
    this.props.postChallengeActionCreator(postInfo);
  }
  render() {
    if (true) {
      return (
        <Challenge
          challengeInfo={this.props.newUserPost}
          editable={true}
          nextUrl={{ url: 'user-challenges', nextText: 'Submit New Challenge!' }}
        />
      );
    } else {
    return (
      <div>
        <form className="input-group post" >
          <div>
            Challenge Name:
            <input ref={input => this.name = input} />
          </div>
          <div>
            Author:
            <input ref={input => this.author = input} />
          </div>
          <div>
            Difficulty:
            <input ref={input => this.difficulty = input} />
          </div>
          <div>
            Test Cases: Please add a tests <br></br>
            <input type="radio" name="Skip" ref={input => this.task = input} /> Skip
            <input type="radio" name="Match" ref={input => this.task = input} /> Match
          </div>
          <div className="postDescription">
            Description:
            <textarea placeholder="Enter A Description" ref={input => this.description = input} >
            </textarea>
          </div>
          <div>
            <button onClick={this.submitPost} className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  }
}
UserChallengePost.propTypes = {
  newUserPost: React.PropTypes.object,
  postChallengeActionCreator: React.PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    newUserPost: state.newUserPost,
  };
};

export default connect(mapStateToProps, { postChallengeActionCreator })(UserChallengePost);
