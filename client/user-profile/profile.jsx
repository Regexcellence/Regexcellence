import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserCompletedChallenges, getUserInfo, getAllTutorials } from '../actions/api';
import ListItem from '../userChallenges/listItem';
import ProgressBar from '../tutorials/progressBar';

import ChallengePieChart from './pieChart';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.userInfo._id) {
      this.props.getUserCompletedChallenges(this.props.userInfo._id);
      this.props.getUserInfo();
    }
    if(!this.props.tutorials.length){
      console.log('***');
      this.props.getAllTutorials();
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
    const { userInfo, tutorials } = this.props;

    const { completed_challenges, authored_challenges } = userInfo;
    let completeLists = [];
    let authoredList = [];
    let percent = '';
    let tutorialUrl = '';
    if (userInfo.tutorial_progress) {
      console.log('USER INFO', userInfo.tutorial_progress);
      if (userInfo.tutorial_progress.order === -1) {
        percent = { width: '0%'};
        tutorialUrl = 'learn-your-abcs';
      } else {
        percent = { width: (Math.floor((userInfo.tutorial_progress.order+1) / tutorials.length * 100)).toString() + '%' };
        tutorialUrl = userInfo.tutorial_progress.tutorialUrl;
      }
    }
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
                      <h1><span>{this.props.userInfo.name}</span></h1>
                      <div>
                        <ChallengePieChart
                          completed_challenges={ completeLists }
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row" id="tutorial-progress">
              <h4>Tutorial Progress</h4>
              <div className="user-profile-progress">
                <Link to={"tutorial/"+ tutorialUrl}><ProgressBar progress={percent} /></Link>
              </div>
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
  tutorials: React.PropTypes.arrayOf(React.PropTypes.object),
  userInfo: React.PropTypes.shape({
    completed_challenges: React.PropTypes.array || React.PropTypes.string,
    _id: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
};

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo, tutorials: state.tutorials };
};

export default connect(mapStateToProps, { getUserCompletedChallenges, getUserInfo, getAllTutorials })(UserProfile);
