import { authenticatePost } from './authenticatePost';

export function updatePostInput(previousState, action) {
	const inputObject = action.inputObject;
	const newInput = {};
	newInput[inputObject.name] = inputObject.value;
	let newUserPost = Object.assign({}, previousState.newUserPost, newInput);
	newUserPost = authenticatePost(newUserPost);
	return Object.assign({}, previousState, { newUserPost })
}