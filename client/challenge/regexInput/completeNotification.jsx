import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    }
    this.fadeOut = this.fadeOut.bind(this);
    this.resetShown = this.resetShown.bind(this);
    this.slideBox = this.slideBox.bind(this);
  }
  fadeOut() {
    setTimeout(() => this.setState({ isShown: !this.state.isShown }), 4000)
  }
  resetShown() {
    setTimeout(() => this.setState({ isShown: !this.state.isShown }), 1000)
  }
  slideBox() {
  	this.fadeOut();
  	let congrats = {
      0: "VERY NICE!",
      1: "EXCELLENT!",
      2: "AWESOME!",
      3: "GOOD JOB!",
      4: "WELL DONE!",
  	}
    return (
      <div id="congrats-box" key="key">{congrats[Math.floor(Math.random() * 5)]}</div>
    )
  }
	render () {
    if (this.props.testPassed && this.state.isShown){
    	let component = this.slideBox();
      return (
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionLeave={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={1000}
          >
            {component}
          </CSSTransitionGroup>
        </div>
      )    	
    } else {
    	return false;
    }
  }
}