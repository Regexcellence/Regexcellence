import React from 'react';
import { connect } from 'react-redux';

import { getUserCompletedChallenges } from '../actions/api';
import ListItem from '../userChallenges/listItem';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUserCompletedChallenges(this.props.userInfo._id);
  }

  render() {
    if (this.props.userInfo === 'Not logged in!') {
      return (
        <div>
          <div className="container text-center not-logged-in">
            <h2>Please sign in to see your profile page.</h2>
          </div>
        </div>
      );
    } else if (this.props.userInfo.completed_challenges[0].name) {

      const complete = this.props.userInfo.completed_challenges;
      const completeLists = this.props.userInfo.completed_challenges.map((each)=>{
        return (
          <ListItem 
            key={each._id} 
            name={each.name} 
            difficulty={each.difficulty} 
            testCases={null} />
        );
      });

      return (
        <div className="user-profile">
          <div className="text-center">
          <hr className="profile-hr"></hr>
          <div className="container">
          <table className="table-responsive">
          <tbody>
            <tr>
              <td> 
                <img className="about-img" src={this.props.userInfo.avatar_url}/>
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

          <div className="row" id="tutorial-progress">
            <h4>Tutorial Progress</h4>
          </div>

          <div className="row" id="contributions">
            <h4>Contributions</h4>
          </div>

          </div>
        </div>
      );
    } else {
      return <div>waiting</div>
    }
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps, { getUserCompletedChallenges })(UserProfile);
