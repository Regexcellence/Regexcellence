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
              <p>Kinfolk deep v quinoa, hammock forage cliche snackwave franzen enamel pin 8-bit small batch migas ethical unicorn lomo. Poke fixie la croix four loko, mixtape hexagon etsy portland poutine cronut distillery banh mi +1 master cleanse.
              </p>
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
              <p>Kinfolk deep v quinoa, hammock forage cliche snackwave franzen enamel pin 8-bit small batch migas ethical unicorn lomo. Poke fixie la croix four loko, mixtape hexagon etsy portland poutine cronut distillery banh mi +1 master cleanse.
              </p>
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
              <p>Kinfolk deep v quinoa, hammock forage cliche snackwave franzen enamel pin 8-bit small batch migas ethical unicorn lomo. Poke fixie la croix four loko, mixtape hexagon etsy portland poutine cronut distillery banh mi +1 master cleanse.
              </p>
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
              <p>Kinfolk deep v quinoa, hammock forage cliche snackwave franzen enamel pin 8-bit small batch migas ethical unicorn lomo. Poke fixie la croix four loko, mixtape hexagon etsy portland poutine cronut distillery banh mi +1 master cleanse.
              </p>
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
