import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { filterChallenges } from '../actions/index';

class ChallengeFilter extends React.Component {
	constructor(props) {
		super(props);
		this.filterChallenges = _.debounce( this.filterChallenges.bind(this), 100);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);
		this.state = {
			fitlerParams: {
				textSearch: null,
				one: null,
				two: null,
				three: null,
				four: null,
				five: null
			},
			showFilter: false
		}
	}
	onChangeInput(event) {
		event.persist();
		this.filterChallenges(event);
	}
	filterChallenges(e) {
		e.persist();
		const { name, value } = e.target;
		const difficultyNums = ['one', 'two', 'three', 'four', 'five'];
		const { filterParams } = this.state;
		const newParams = Object.assign({}, filterParams);
		// For checkbox toggling. 
		if (newParams[name]) {
			if (difficultyNums.indexOf(name) > -1) {
				newParams[name] = null; 
			} else {
				newParams[name] = value
			}
		} else {
			newParams[name] = value; 
		}
		this.setState({ filterParams: newParams }, () => {
			this.props.filterChallenges(this.state.filterParams);
		});
	}
	toggleFilter() {
		this.setState({ showFilter: !this.state.showFilter })
	}
	render() {
		if (this.state.showFilter) {
			return (
				<div id="challenge-filter">
					<div id="toggle-filter" onClick={this.toggleFilter}>
						<span className="glyphicon glyphicon-triangle-top" />
						<span>Hide Filter</span>
						<span className="glyphicon glyphicon-triangle-top" />
					</div>
					<form onChange={this.onChangeInput}>
							<input type="text" name="textSearch" placeholder="Filter by text or difficulty" />
							<br />
							<div id="difficulty-checkbox">
								<input type="checkbox" ref="One" name="one" value="1" /><span>Level 1 </span>
								<input type="checkbox" ref="Two" name="two" value="2" /><span>Level 2</span>
								<input type="checkbox" ref="Three" name="three" value="3" /><span>Level 3</span>
								<input type="checkbox" ref="Four" name="four" value="4" /><span>Level 4</span>
								<input type="checkbox" ref="Four" name="five" value="5" /><span>Level 5</span>
							</div>
					</form>
				</div>
			)
		} else {
			return (
				<div id="toggle-filter" onClick={this.toggleFilter}>
					<span className="glyphicon glyphicon-triangle-bottom" />
					<span>Show Filter</span>
					<span className="glyphicon glyphicon-triangle-bottom" />
				</div>
			)
		}
	}
}

export default connect(null, { filterChallenges })(ChallengeFilter);