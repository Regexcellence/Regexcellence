import React from 'react';
import ReactDOM from 'react-dom';
// For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
// To create 'store' variable
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';

import Controls from './controls';
import thunk from 'redux-thunk';

const finalStore = applyMiddleware(thunk)(createStore);
const store = finalStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Regexcellence</p>
        <Provider store={store}>
          <Controls />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
