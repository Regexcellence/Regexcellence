import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory';

import reducer from './reducers/index';
import Navbar from './controls/navbar';
import Footer from './controls/footer';

import Tutorial from './pages/tutorial';
import About from './pages/about';
import Home from './pages/home';
import Post from './pages/post';
import UserChallenges from './pages/userChallenges';
import TutorialMain from './tutorials/tutorialMain';
import UserChallengeMain from './userChallenges/userChallengeMain';

const history = useRouterHistory(createHistory)({ queryKey: false });

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div className="everything">
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Navbar}>
              <IndexRoute component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/post" component={Post} />
              <Route path="/user-challenges" component={UserChallenges}>
                <Route path="/user-challenges/:challengeid" component={UserChallengeMain} />
              </Route>
              <Route path="/tutorial" component={Tutorial}>
                <Route path="/tutorial/:nameurl" component={TutorialMain} />
              </Route>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
