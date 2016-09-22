import React, { Component } from 'react';
import { connect } from 'react-redux';
import Challenge from '../challenge/challenge';
import { inputActionCreator } from '../actions/index';

class TutorialMain extends Component {
  constructor(props) {
    super(props);
  }
  getTutorialProps() {
    const challengesList = [];
    const orderList = () => {
      this.props.challenges.forEach((item) => {
        challengesList[item.order] = item;
      });
    }
    orderList();
    console.log('challengesList!', challengesList);
    const getProps = (param) => {
      return challengesList.reduce((prev, curr) => {
        if (curr.nameurl === param) {
          return curr;
        } else {
          return prev;
        }
      }, {});
    }
    return {
      getProps,
      orderList,
      challengesList,
    };
  }
  render() {
    if (this.props.challenges.length) {
      const currentChallenge = this.getTutorialProps().getProps(this.props.params.nameurl);
      const orderedList = this.getTutorialProps().challengesList;
      return (
        <div>
          <Challenge
            key={currentChallenge._id}
            challengeInfo={currentChallenge}
            nextTutorial={orderedList[currentChallenge.order + 1].nameurl}
          />
        </div>
      );
    } else {
      return false;
    }
  }
}

const mapStateToProps = (state) => {
    return { challenges: state.challenges };
};

export default connect(mapStateToProps, { inputActionCreator })(TutorialMain);
