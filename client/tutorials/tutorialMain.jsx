import React, { Component } from 'react';
import { connect } from 'react-redux';
import Challenge from '../challenge/challenge';

class TutorialMain extends Component {
  constructor(props) {
    super(props);
  }
  getTutorialProps() {
    const tutorialsList = [];
    const orderList = () => {
      this.props.tutorials.forEach((item) => {
        tutorialsList[item.order] = item;
      });
    }
    orderList();
    const getProps = (param) => {
      return tutorialsList.reduce((prev, curr) => {
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
      tutorialsList,
    };
  }
  render() {
    if (this.props.tutorials.length) {
      const currentTutorial = this.getTutorialProps().getProps(this.props.params.nameurl);
      const orderedList = this.getTutorialProps().tutorialsList;
      const nextTutorial = { nextText: 'Continue' };
      if (orderedList[currentTutorial.order + 1] === undefined) {
        nextTutorial.url = '';
      } else {
        nextTutorial.url = `tutorial/${orderedList[currentTutorial.order + 1].nameurl}`;
      }
      return (
        <div className="clear-top">
          <Challenge
            key={currentTutorial._id}
            challengeInfo={currentTutorial}
            nextUrl={nextTutorial}
            editable={false}
          />
        </div>
      );
    } else {
      return false;
    }
  }
}

const mapStateToProps = (state) => {
    return { tutorials: state.tutorials };
};

export default connect(mapStateToProps)(TutorialMain);
