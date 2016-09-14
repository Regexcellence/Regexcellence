import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.body);