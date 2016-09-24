export function updatePostInput(previousState, action) {
	const inputObject = action.inputObject;
	const newInput = {};
	newInput[inputObject.name] = inputObject.value;
	const newUserPost = Object.assign({}, previousState.newUserPost, newInput);
	return Object.assign({}, previousState, { newUserPost })
}

export function updatePostTestCases(previousState, action) {
	const testCaseObject = action.testCaseObject;
	let newTestCases = previousState.newUserPost.testCases.slice();
	if (testCaseObject.action === 'ADD') {
		const newTestCase = tagTestCaseData(testCaseObject.data);
		newTestCases = [...newTestCases, newTestCase];
	}
	const newUserPost = Object.assign({}, previousState.newUserPost, { testCases: newTestCases })
	return Object.assign({}, previousState, { newUserPost })
}

// For adding defaults to testcase data, like testResult prop, expectation boolean, etc.
function tagTestCaseData(dataObject) {
	return Object.assign({}, dataObject, {
		result: null,
		expectation: dataObject.task === 'Match' ? true : false,
	})
}