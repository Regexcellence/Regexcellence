import { authenticatePost } from './authenticatePost';

export function updatePostInput(previousState, action) {
	const inputObject = action.inputObject;
	const newInput = {};
	newInput[inputObject.name] = inputObject.value;
	let newUserPost = Object.assign({}, previousState.newUserPost, newInput);
	newUserPost = authenticatePost(newUserPost);
	return Object.assign({}, previousState, { newUserPost })
}

export function updatePostAuthor(previousState, action) {
	const { gitHandle, _id } = action; 
	let newUserPost = Object.assign({}, previousState.newUserPost, { author: gitHandle, authorId: _id });
	return Object.assign({}, previousState, { newUserPost });
}