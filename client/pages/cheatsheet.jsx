import React from 'react';

export default class CheatSheet extends React.Component {
	render() {
		return (
			<ul id="cheat-sheet">
				<li>abc…	Letters</li>
				<li>123…	Digits</li>
				<li>\d	Any Digit</li>
				<li>\D	Any Non-digit character</li>
				<li>.	Any Character</li>
				<li>\	Escape character</li>
				<li>[abc]	Only a, b, or c</li>
				<li>[^abc]	Not a, b, nor c</li>
				<li>[a-z]	Characters a to z</li>
				<li>[A-Z] Characters A to Z</li>
				<li>[0-9]	Numbers 0 to 9</li>
				<li>\w	Any Alphanumeric character</li>
				<li>\W	Any Non-alphanumeric character</li>
				<li>{'{m}	m Repetitions'}</li>
				<li>{'{m,n}	m to n Repetitions'}</li>
				<li>*	Zero or more repetitions</li>
				<li>+	One or more repetitions</li>
				<li>?	Optional preceding character</li>
				<li>\s	Any Whitespace</li>
				<li>\S	Any Non-whitespace character</li>
				<li>^ Starts</li>
				<li>$ Ends</li>
				<li>(…)	Capture Group</li>
				<li>(a(bc))	Capture Sub-group</li>
				<li>(.*)	Capture all</li>
				<li>(abc|def)	Matches abc or def</li>
			</ul>
		)
	}
}