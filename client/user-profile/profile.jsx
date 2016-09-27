import React from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/api';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  	this.props.getUserInfo();
  }
  render() {
  	return <div>{this.props.userInfo._id}</div>;
  }
}

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo }
}

export default connect(mapStateToProps, { getUserInfo })(UserProfile);


