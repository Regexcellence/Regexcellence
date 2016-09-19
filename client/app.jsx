import React from 'react';
import ReactDOM from 'react-dom';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable

import { Router, Route, browserHistory } from 'react-router';

import store from './reducers/index';

import Main from './components/main';
import Controls from './controls';



class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Controls} />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
