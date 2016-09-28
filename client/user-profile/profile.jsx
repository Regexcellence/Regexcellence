import React from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/api';
import ListItem from '../userChallenges/listItem';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getUserInfo();
  }

  render() {
    const complete = [
    {
      "name": "Spaces at the beginning and end of strings",
      "difficulty": 2,
    },
    {
      "name": "Use regex to validate regex!",
      "difficulty": 2,
    }
    ];
    const completeLists = complete.map((each)=>{
      return (
        <ListItem 
          key={each.name} name={each.name} 
          difficulty={each.difficulty} 
          testCases={null}/>
      );
    });
    if(!Object.keys(this.props.userInfo).length) {
      return <div>loading</div>;
    } else if (this.props.userInfo === 'Not logged in!') {
      return (
        <div>
          <div className="container text-center not-logged-in">
            <h2>Please sign in to see your profile page.</h2>
          </div>
        </div>
      );
    } else {
      // console.log('loaded:', this.props.userInfo);
      return (
        <div>
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
            {completeLists}
          </div>

            <div className="row" id="contributions">
              <h4>Contributions</h4>
            </div>

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo };
};

export default connect(mapStateToProps, { getUserInfo })(UserProfile);
