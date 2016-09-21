import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory';

import Controls from './controls';
import reducer from './reducers/index';
import routes from './routes.jsx';
import Navigation from './components/navbar';

import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial.jsx';
import About from './components/pages/about.jsx';


const history = useRouterHistory(createHistory)({ queryKey: false });

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history}>

            <Route path="/" component={Navigation} />

            <Route path="/tutorial" component={Tutorial} />
            <Route path="/about" component={About} />
            </Router>
            <Controls />
          </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
