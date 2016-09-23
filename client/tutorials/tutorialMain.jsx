import React, { Component } from 'react';
import { connect } from 'react-redux';
import Challenge from '../challenge/challenge';

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
      const nextTutorial = { nextText: 'Continue' };
      if (orderedList[currentChallenge.order + 1] === undefined) {
        nextTutorial.url = '';
      } else {
        nextTutorial.url = `tutorial/${orderedList[currentChallenge.order + 1].nameurl}`;
      }
      return (
        <div>
          <Challenge
            key={currentChallenge._id}
            challengeInfo={currentChallenge}
            nextUrl={nextTutorial}
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

export default connect(mapStateToProps)(TutorialMain);
