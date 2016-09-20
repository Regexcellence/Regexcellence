import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browseHistory } from 'react-router';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';

import Controls from './controls';
import thunk from 'redux-thunk';
import routes from './routes.jsx';

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
          <Router routes={routes} history={browseHistory} />
          <div>Hello {this.props.children} </div>
          <Provider store={store}>
          <Controls />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
