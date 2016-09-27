export function authenticatePost(newUserPost, action) {
	let authenticatedInput = true;
	if (!newUserPost.name.length) {
		authenticatedInput = false;
	}
	if (!newUserPost.description.length) {
		authenticatedInput = false;
	}
	let matchCount = 0, skipCount = 0;
	newUserPost.testCases.forEach((testcase) => {
		if (testcase.expectation) {
			matchCount++;
		} else {
			skipCount++;
		}
		if (!testcase.case.length) {
			authenticatedInput = false;
		}
	});
	if (matchCount < 3 || skipCount < 3) {
		authenticatedInput = false;
	}
	return Object.assign({}, newUserPost, { authenticatedInput });
}