import React from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/api';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props.getUserInfo);
  	this.props.getUserInfo();
  }
  render() {
  	return (
      <div className="container">
        <h1 className="jumbotron">Hello User</h1>
      </div>);
  }
}

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo }
}

export default connect(mapStateToProps, { getUserInfo })(UserProfile);


