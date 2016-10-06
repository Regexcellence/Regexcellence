import React from 'react';

export default class CheatSheet extends React.Component {
	render() {
		return (
			<ul className="cheat-sheet">
				<li><span>\d</span> Any Digit</li>
				<li><span>\D</span> Any Non-Digit Character</li>
				<li><span>.</span> Any Character</li>
				<li><span>\	</span> Escape Character</li>
				<li><span>[abc]</span> Only a, b, or c</li>
				<li><span>[^abc]</span> Not a, b, nor c</li>
				<li><span>[a-z]</span> Characters a to z</li>
				<li><span>[A-Z]</span> Characters A to Z</li>
				<li><span>[0-9]</span> Numbers 0 to 9</li>
				<li><span>\w</span> Any Alphanumeric character</li>
				<li><span>\W</span> Any Non-alphanumeric character</li>
				<li><span>{'{m,n}'}</span> m to n Repetitions</li>
				<li><span>*</span> Zero or more repetitions</li>
				<li><span>+</span> One or more repetitions</li>
				<li><span>?</span> Optional preceding character</li>
				<li><span>\s</span> Any Whitespace</li>
				<li><span>\S</span> Any Non-whitespace character</li>
				<li><span>\b</span> Matches at the beginning or end of a word.</li>
				<li><span>^</span> Starts</li>
				<li><span>$</span> Ends</li>
				<li><span>(…)</span> Capture Group</li>
				<li><span>(a(bc))</span> Capture Sub-group</li>
				<li><span>(.*)</span> Capture all</li>
			</ul>
		)
	}
}
