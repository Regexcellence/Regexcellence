import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllChallenges } from '../actions/index';
import Challenge from '../containers/challenge';

class Challenges extends Component {
  componentWillMount(){
    this.props.getAllChallenges();
  }

  render() {
    if (this.props.allChallenges.length > 0) {
      const challenges = this.props.allChallenges.map((challenge) => {
        return (
            <Challenge challengeInfo={challenge.testCases} />
          );
        });
      return (
        <div> {challenges} </div>
      );
    }
    return <div> LOADING!!! </div>;
  }
}
const mapStateToProps = (state) => {
  // return { challengeInfo: state.challenges, getAllChallenges: state.allChallenges };
  return { allChallenges: state.allChallenges };
};

export default connect(mapStateToProps, { getAllChallenges })(Challenges);

  // componentWillMount() {
  //   this.props.getAllChallenges();
  // }
  //
  // renderChallenges() {
  //   if (this.props.allChallenges.length > 0) {
  //     return this.props.allChallenges.map((challenge) => {
  //       console.log(challenge);
  //       return (
  //         <li className="list-group-item" key={challenge.order}>
  //           <p>{ challenge.author }</p>
  //           <strong>{challenge.name}</strong>
  //           <p><span className="pull-xs-right">{challenge.description}</span></p>
  //         </li>
  //       );
  //     });
  //   }
  //   return <div> LOADING !!!!</div>;
  // }
