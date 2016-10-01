import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUserInfo } from '../actions/api';
import trumpet from '../styles/images/trumpet.png';
import quill from '../styles/images/quill.png';
import book from '../styles/images/book.png';
import arrows from '../styles/images/arrows.png';

class Home extends React.Component {
  componentWillMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div>
        <div className="home-banner">
          <img className="banner-img" src={trumpet} />
          <h1>Learning Regex has never been this easy</h1>
          <p className="lead">Or this competitive</p>
        </div>
        <div>
          {/*<p className="home-page">
            This is where we talk about the history of Regex. Pour-over XOXO poutine slow-carb. Forage retro raw denim umami, live-edge thundercats humblebrag godard green juice photo booth food truck man braid. Stumptown lyft slow-carb, chillwave raclette waistcoat williamsburg narwhal. Mlkshk next level tattooed kogi health goth. Microdosing chia semiotics pour-over, austin street art bitters. Mixtape direct trade everyday carry four dollar toast food truck, viral unicorn kale chips austin. You probably haven't heard of them microdosing 90's portland semiotics.
          </p>*/}
        </div>
          <div className="container">
            <div className="row homepage-row">
              <div className="col-md-4 home-images">
                <div className="book-logo"><span className="book-r">R</span><img className="list-img" src={book} /></div><br />
                <h3 className="learn-h3"><Link to="tutorial">LEARN</Link></h3>
                <div className="image-text">Take our comprehensive tutorial to learn the basics of Regex!</div>
              </div>
                <div className="col-md-4 home-images">
                  <img className="list-img" src={arrows} /><br /><br />
                  <h3 className="challenge-h3"><Link to="user-challenges">CHALLENGE</Link></h3>
                  <div className="image-text">Practice your new skills at our user submitted Regex challenges.</div>
                </div>
              <div className="col-md-4 home-images">
                <img className="quill" src={quill} /><br /><br />
                <h3 className="contribute-h3"><Link to="post">CONTRIBUTE</Link></h3>
                <div className="image-text">Become part of the community by submitting your own Regex challenges.</div>
              </div>
            </div>
        </div>
        <div className="lower-home">
          <p>Regex is used to locate, match, and manage text. Learning how to use it has the potential to save you thousands of hours of work. Regexcellence was developed to teach you the basic formation of these fantastic patterns and provide a platform for you to practice writing them. Our team is passionate about coding and excited to share our knowledge with the world.</p><br /><span className="glyphicon glyphicon-grain" /><br /><br />
          <p>
            Regular Expressions have been around since the 50s, but it wasn’t until the 80s that the regex we know and love today really started to develop. A lot of the patterns and syntax was designed specifically to work with Perl, and you will still sometimes hear the term Perl-style thrown around. Luckily regex works well with a myriad of languages today, and honing your skills will help you become an all-around phenomenal programer!
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userInfo: state.userInfo }
}
export default connect(mapStateToProps, { getUserInfo })(Home);

