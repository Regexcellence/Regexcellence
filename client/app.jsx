import React from 'react';
import ReactDOM from 'react-dom';
//For creating eventual <Provider /> tag
import { Provider } from 'react-redux';
//To create 'store' variable
import { createStore } from 'redux';

import Controls from './controls';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>Hello react</p>
				<Controls /> 
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main'));