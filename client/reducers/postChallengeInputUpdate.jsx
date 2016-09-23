export function updatePostInput(previousState, action) {
	const inputObject = action.inputObject;
	const newInput = {};
	newInput[inputObject.name] = inputObject.value;
	const newUserPost = Object.assign({}, previousState.newUserPost, newInput);
	return Object.assign({}, previousState, { newUserPost })
}