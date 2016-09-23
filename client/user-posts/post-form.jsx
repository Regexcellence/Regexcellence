import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChallengeActionCreator } from '../actions/index';

class UserChallengePost extends Component {
  constructor(props) {
    super(props);
    this.submitPost = this.submitPost.bind(this);
  }
  submitPost(event) {
    event.preventDefault();
    const postInfo = {
      name: this.name.value,
      author: this.author.value,
      difficulty: this.difficulty.value,
      description: this.description.value,
      testCases: {
        task: this.task.value,
      },
    };
  console.log('POST INFO:', postInfo);
    this.props.postChallengeActionCreator(postInfo);
  }
  render() {
    return (
      <div>
        <form className="input-group post" onSubmit={this.submitPost}>
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
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>
      );
    }
  }

export default connect(null, { postChallengeActionCreator })(UserChallengePost);
