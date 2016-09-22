import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory';

import reducer from './reducers/index';
import Navigation from './controls/navbar';

import Tutorial from './pages/tutorial';
import About from './pages/about';
import Home from './pages/home';
import TutorialMain from './tutorials/tutorialMain';

const history = useRouterHistory(createHistory)({ queryKey: false });

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Navigation} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/tutorial" component={Tutorial}>
              <Route path="/:nameurl" component={TutorialMain} />
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
