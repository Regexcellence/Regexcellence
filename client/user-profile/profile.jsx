import React from 'react';
import { connect } from 'react-redux';

import { getUserCompletedChallenges } from '../actions/api';
import ListItem from '../userChallenges/listItem';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.userInfo._id) {
      this.props.getUserCompletedChallenges(this.props.userInfo._id);
    }
  }
  render() {
    const { userInfo } = this.props;
    const { completed_challenges, authored_challenges } = userInfo;
    console.log('USERINFO', userInfo);
    if (!Object.keys(userInfo).length) {
      return (
        <div>
          <div className="container text-center not-logged-in">
            <h2>Please sign in to see your profile page.</h2>
          </div>
        </div>
      );
    } else {
      let completeLists = [];
      let authoredList = [];
      console.log('CHALLENGES USERINFO BEFORE', completed_challenges);
      if (typeof completed_challenges[0] === 'object') {
        completeLists = completed_challenges.map((each, i) => {
          console.log('CHALLENGES USERINFO', completed_challenges);
          return (
            <ListItem
              key={i}
              challengeId={each._id}
              name={each.name}
              difficulty={each.difficulty}
              testCases={null}
            />
          );
        });
      }
      console.log('AUTHORED USERINFO BEFORE', authored_challenges);
      if (typeof authored_challenges[0] === 'object') {
        authoredList = authored_challenges.map((item, indx) => {
          console.log('AUTHORED USERINFO', authored_challenges);
          return (
            <ListItem
              key={indx}
              challengeId={item._id}
              name={item.name}
              difficulty={item.difficulty}
              testCases={null}
            />
          );
        });
      }
      return (
        <div className="user-profile">
          <div className="text-center">
            <hr className="profile-hr"></hr>
            <div className="container">
              <table className="table-responsive">
                <tbody>
                  <tr>
                    <td>
                      <img
                        alt="userprofile"
                        className="about-img"
                        src={this.props.userInfo.avatar_url}
                      />
                    </td>
                    <td>
                      <h1>{this.props.userInfo.name}</h1>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row" id="complete-challenge">
              <h4>Completed Challenges</h4>
              { completed_challenges !== undefined ? completeLists : false }
            </div>

            <div className="row" id="tutorial-progress">
              <h4>Tutorial Progress</h4>
            </div>

            <div className="row" id="contributions">
              <h4>Contributions</h4>
              { authored_challenges !== undefined ? authoredList : false }
            </div>

          </div>
        </div>
      );
    }
  }
}

UserProfile.propTypes = {
  getUserCompletedChallenges: React.PropTypes.func,
  userInfo: React.PropTypes.shape({
    _id: React.PropTypes.string,
    completed_challenges: React.PropTypes.array || React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
};

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps, { getUserCompletedChallenges })(UserProfile);
