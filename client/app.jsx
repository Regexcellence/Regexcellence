import React from 'react';
import ReactDOM from 'react-dom';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore } from 'redux';
import store from './reducers/index';

import Main from './components/main';



class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
        <Provider store={store}>
        	<Main />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
