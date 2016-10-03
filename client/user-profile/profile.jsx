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
  mapChallenges(listContent) {
    return listContent.map((each, i) => {
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
  render() {
    const { userInfo } = this.props;
    const { completed_challenges, authored_challenges } = userInfo;
    let completeLists = [];
    let authoredList = [];
    if (!Object.keys(userInfo).length) {
      return (
        <div>
          <div className="container text-center not-logged-in">
            <h2>Please sign in to see your profile page.</h2>
          </div>
        </div>
      );
    } else {
      if (typeof completed_challenges[0] === 'object') {
        completeLists = this.mapChallenges(completed_challenges);
      }
      if (typeof authored_challenges[0] === 'object') {
        authoredList = this.mapChallenges(authored_challenges);
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
              { completeLists }
            </div>
            <div className="row" id="contributions">
              <h4>Contributions</h4>
              { authoredList }
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
