const testCaseActions = {
	'ADD': addTestCase,
	'EDIT-MODE': toggleEditMode,
	'DELETE': deleteTestCase,
}


export function updatePostTestCases(previousState, action) {
	const testCaseObject = action.testCaseObject;
	let oldTestCases = previousState.newUserPost.testCases.slice();
	const newUserPost = testCaseActions[testCaseObject.action](previousState, testCaseObject, oldTestCases);
	return Object.assign({}, previousState, { newUserPost })
}

function toggleEditMode(previousState, testCaseObject, oldTestCases) {
	const newTestCase = tagTestCaseData(testCaseObject.data);
	for (let i = 0; i < oldTestCases.length; i++) {
		if (oldTestCases[i]._id === newTestCase._id) {
			oldTestCases[i] = Object.assign({}, oldTestCases[i], { editing: !newTestCase.editing });
		}
	}
	return Object.assign({}, previousState.newUserPost, { testCases: oldTestCases })
}

function deleteTestCase(previousState, testCaseObject, oldTestCases) {
	const testCase = tagTestCaseData(testCaseObject.data);
	for (let i = 0; i < oldTestCases.length; i++) {
		if (oldTestCases[i]._id === testCase._id) {
			oldTestCases.splice(i,1);
			return Object.assign({},  previousState.newUserPost, { testCases: oldTestCases })
		}
	}
	return Object.assign({}, previousState.newUserPost, { testCases: oldTestCases })
}

function addTestCase(previousState, testCaseObject, oldTestCases) {
	const newTestCase = tagTestCaseData(testCaseObject.data);
	// Check to see if the entry already exisits. 
	for (let i = 0; i < oldTestCases.length; i++) {
		if (oldTestCases[i]._id === newTestCase._id) {
			console.log(newTestCase)
			oldTestCases[i] = newTestCase;
			return Object.assign({},  previousState.newUserPost, { testCases: oldTestCases })
		}
	}
	oldTestCases = [...oldTestCases, newTestCase];
	return Object.assign({}, previousState.newUserPost, { testCases: oldTestCases })
}

// For adding defaults to testcase data, like testResult prop, expectation boolean, etc.
function tagTestCaseData(dataObject) {
	return Object.assign({}, dataObject, {
		result: null,
		expectation: dataObject.task === 'Match' ? true : false,
		innerMatches: {
			start: dataObject.case,
			match: '',
			end: '',
		}
	})
}