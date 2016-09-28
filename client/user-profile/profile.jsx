import React from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/api';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getUserInfo();
    console.log('userinfo:', this.props.userInfo);
  }

  render() {
    if(!Object.keys(this.props.userInfo).length){
      return <div>loading</div>
    } else {
      console.log('loaded', this.props.userInfo)
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
            <h4>Complete Challenges</h4>
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
    }
  }
}

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo }
}

export default connect(mapStateToProps, { getUserInfo })(UserProfile);


