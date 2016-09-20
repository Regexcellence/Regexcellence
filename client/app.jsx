import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';

import Controls from './controls';
import thunk from 'redux-thunk';
//import routes from './routes.jsx';

import createHistory from 'history/lib/createHashHistory';
const history = useRouterHistory(createHistory)({ queryKey: false });

import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial';
import About from './components/pages/about';

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
          <Provider store={store}>
          <div>
          <Router history={history}>
            <Route path='/' component={Home} />
            <Route path='/tutorial' component={Tutorial} />
            <Route path='/about' component={About} />
          </Router>
          <Controls />
        </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
