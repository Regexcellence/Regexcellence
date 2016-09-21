export function inputValidator(previousState, action) {
  const userInput = action.newInput;
  // Validates whether the input was a properly formed regex.
  const wellFormedInput = /^\/.*\/[gimuy]{0,5}$/.test(userInput);
  return Object.assign({}, previousState, { userInput, wellFormedInput });
}
