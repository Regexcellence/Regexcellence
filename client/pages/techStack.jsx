import React, { Component } from 'react';
import stack from '../styles/images/stack.png';
class TechStack extends Component {
  render() {
    return (
    <div>
      <hr className="profile-hr"></hr>
      <div className="container tech-stack">
        <h2 className="text-center">Our Tech Stack</h2>
        <div className="row">
          <div className="col-md-11 col-md-offset-1">
            <img src={stack} />
          </div>
        </div>
        <div className="text-center">
          <h2>Example input:</h2>
          <span>/\w*[abc]/g</span>
        </div>

        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Step 1</h3>
            <p className="lead">Remove any flags and forward slashes:</p>
            <span>flags: g  forward slashes: //</span>
          </div>

          <div className="col-md-4 text-center">
            <h3>Step 2</h3>
            <p className="lead">Generate XRegExp object:</p>
            <span>XRegeExp('\w*[abc]', 'g')</span>
          </div>

          <div className="col-md-4 text-center">
            <h3>Step 3</h3>
            <p className="lead">Match against test cases:</p>
            <span>/pattern/.test(...match, skip)</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Step 4</h3>
            <p className="lead">Match for syntax highlight:</p>
            <span>/pattern/.match(...match, skip)</span>
          </div>

          <div className="col-md-4 text-center">
            <h3>Step 5</h3>
            <p className="lead">Check if all cases were passed:</p>
            <span>[ case1: true, case2: true, ...etc ]</span>
          </div>

          <div className="col-md-4 text-center">
            <h3>Step 6</h3>
            <p className="lead">Display result to users:</p>
            <span>Test Passed! Case1: Can you act?
              <span className="glyphicon glyphicon-ok"/>
            </span>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
