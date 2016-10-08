import React, { Component } from 'react';
import Navigation from '../controls/navbar';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center about-table-title"><span>Meet Our Team</span></h1>
        <div  className="container text-center about-table">
          <div className="row">
            <div className="col-md-3">
              <img className="about-img" src="https://avatars3.githubusercontent.com/u/18633748" />
              <p className="lead">TROY GIBB</p>
              <div className="self-description">
                <p>Why do I love regex? Maybe it has something to do with the godly superpowers of pattern matching. Regexcellence has been an extradorinary opportunity to both learn more about regex and give back to the coding community that has already taught me so much.
                </p>
              </div>
              <a target="_blank" href="https://github.com/troygibb">
                <i className="fa fa-github about-links"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/troygibb">
                <i className="fa fa-linkedin-square about-links"></i>
              </a>
              <hr></hr>
            </div>

            <div className="col-md-3">
              <img className="about-img" src="https://avatars3.githubusercontent.com/u/17036705" />
              <p className="lead">DANA LI</p>
              <div className="self-description">
                <p>I enjoy drawing and making things that bring values or better experiences, and that's what makes coding so appealing to me. Also, currently a jiu-jitsu white belt in training.
                </p>
              </div>
              <a target="_blank" href="https://github.com/hellodanali">
                <i className="fa fa-github about-links"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/hellodanali">
                <i className="fa fa-linkedin-square about-links"></i>
              </a>
              <hr></hr>
            </div>

            <div className="col-md-3">
              <img className="about-img" src="https://avatars1.githubusercontent.com/u/13708462" />
              <p className="lead">BENJAMIN TRAN</p>
              <div className="self-description">
                <p>When my computer is turned off, I'm either playing basketball, getting lost on hikes, or brewing pour over coffee. I can also tumble pretty well when doing a handstand.
                </p>
              </div>
              <a target="_blank" href="https://github.com/bbtran">
                <i className="fa fa-github about-links"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/bbtran">
                <i className="fa fa-linkedin-square about-links"></i>
              </a>
              <hr></hr>
            </div>

            <div className="col-md-3">
              <img className="about-img" src="https://avatars2.githubusercontent.com/u/16870016" />
              <p className="lead">LUCY WONSOWER</p>
              <div className="self-description">
                <p>When I'm not writing the most devastatingly regular expression-rich code, I'm doing yoga or riding my bike. I can also do a pretty good handstand.
                </p>
              </div>
              <a target="_blank" href="https://github.com/lwonsower">
                <i className="fa fa-github about-links"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/lwonsower">
                <i className="fa fa-linkedin-square about-links"></i>
              </a>
              <hr></hr>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default About;
