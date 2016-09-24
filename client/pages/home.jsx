import React, { Component } from 'react';
import Navigation from '../controls/navbar';
import Controls from '../controls/controls';

class Home extends Component {
  render() {
    return (
    	<div>
        <div className="jumbotron clear-top">
        	<img className="banner-img" src="http://static1.squarespace.com/static/51a9aa9fe4b02f35a70e4fb5/52edec83e4b03137dd9c38c3/52f5763ee4b0021595ac9139/1391818331083/icon-illus-v2.png?format=300w" />
          <h1>Learning Regex has never been this easy</h1>
          <p class="lead">Or this competitive</p>
        </div>
        <div>
          <p className="home-page">
            This is where we talk about the history of Regex. Pour-over XOXO poutine slow-carb. Forage retro raw denim umami, live-edge thundercats humblebrag godard green juice photo booth food truck man braid. Stumptown lyft slow-carb, chillwave raclette waistcoat williamsburg narwhal. Mlkshk next level tattooed kogi health goth. Microdosing chia semiotics pour-over, austin street art bitters. Mixtape direct trade everyday carry four dollar toast food truck, viral unicorn kale chips austin. You probably haven't heard of them microdosing 90's portland semiotics.
          </p>
          <div className="home-page">
          	<table className="table-style"><tr>
          		<td className="home-list">
          		  <img className="list-img" src="http://static1.squarespace.com/static/51a9aa9fe4b02f35a70e4fb5/52edec83e4b03137dd9c38c3/52f5763ee4b0021595ac9139/1391818331083/icon-illus-v2.png?format=300w" /><br />
                <div>Take our comprehensive tutorial to learn the basics of Regex!</div>
          		</td>
          		<td className="home-list">
          		  <img className="list-img" src="http://static1.squarespace.com/static/51a9aa9fe4b02f35a70e4fb5/52edec83e4b03137dd9c38c3/52f5763ee4b0021595ac9139/1391818331083/icon-illus-v2.png?format=300w" /><br />
                <div>Practice your new skills at our user submitted Regex challenges.</div>
          		</td>
          		<td className="home-list">
          		  <img className="list-img" src="http://static1.squarespace.com/static/51a9aa9fe4b02f35a70e4fb5/52edec83e4b03137dd9c38c3/52f5763ee4b0021595ac9139/1391818331083/icon-illus-v2.png?format=300w" /><br />
                <div>Become part of the community by submitting your own Regex challenges.</div>
          		</td>
          	</tr></table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

