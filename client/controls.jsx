import React from 'react';

import Challenges from './components/challenges';
import Progress from './components/progress';
import Lesson from './components/lesson';

export default class Controls extends React.Component {
	render() {
		return (
			<div>
        <Progress />
        <Lesson />
				<Challenges />
			</div>
		);
	}
}
