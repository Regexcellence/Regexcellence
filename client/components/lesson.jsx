import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Lesson extends Component{
  constructor(props){
    super(props);

    const description = 'Regular expressions are extremely useful in extracting information from text such as code, log files, spreadsheets, or even documents. And while there is a lot of theory behind formal languages, the following lessons and examples will explore the more practical uses of regular expressions so that you can use them as quickly as possible.';

    this.state = { description };
  }
  render(){
    return (
      <div> 
        <h3>Lesson</h3> 
        <p>{this.state.description}</p>
      </div>
    );
  }
}


export default Lesson;
