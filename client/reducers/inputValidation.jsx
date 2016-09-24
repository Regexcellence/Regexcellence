import { regexParser } from './regexHelpers';

export function inputValidator(previousState, action) {
  const userInput = action.newInput;
  // Validates whether the input was a properly formed regex.
  let wellFormedInput = /^\/.*\/[gimuy]{0,5}$/.test(userInput);
  if (wellFormedInput) {
  	wellFormedInput = regexErrorHandler(userInput);
  }
  return Object.assign({}, previousState, { userInput, wellFormedInput });
}

function regexErrorHandler(input) {
	const parsedInput = regexParser(input);
	try {
		const regex = parsedInput.flags
    ? new RegExp(parsedInput.pattern, parsedInput.flags)
    : new RegExp(parsedInput.pattern);
    return true;
	}
	catch(error) {
		return false;
	}
}