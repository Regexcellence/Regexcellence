import React, { Component } from 'react';
import ListItem from './listItem';

class ListView extends Component {
  render() {
    if(this.props.userChallenges.length){
      const list = this.props.userChallenges.map((challenge) => {
        return <ListItem 
        key={challenge._id} 
        challengeId={challenge._id}
        name={challenge.name} 
        order={challenge.order+1} 
        author={challenge.author}
        testCases={challenge.testCases}/>;
      });

      return (
        <div className="challenge-list">
          <ul className="list-group">
            {list}
          </ul>
        </div>
      );
    } else{
      return <div></div>
    }
  }
}

export default ListView;
