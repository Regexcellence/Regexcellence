import React from 'react';
import ReactDOM from 'react-dom';
// For creating eventual <Provider /> tag
// import { Provider } from 'react-redux';
// To create 'store' variable
// import { createStore } from 'redux';

import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
