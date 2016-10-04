export function filterChallenges(previousState, action) {
	const { filterParams } = action;
	const filtered_challenges = updateFilter(filterParams, previousState.challenges);
	return Object.assign({}, previousState, { filtered_challenges }); 
}	

function updateFilter(filterParams, challenges) {
	const difficultyNums = ['one', 'two', 'three', 'four', 'five'];
	const { textSearch } = filterParams;
	if (checkIfAllNull(filterParams)) return challenges;
	return challenges.filter((challenge) => {
		const { name, difficulty, description, author } = challenge;
		const difficultyParams = difficultyNums.map((num) => {
			return filterParams[num] ? parseInt(filterParams[num], 10) : null;
		});
		if (difficultyParams.indexOf(difficulty) > -1) {
			return true;
		}
		if (textSearch) {
			const regex = new RegExp(textSearch, 'i');
			if (regex.test(name)) return true; 
			if (regex.test(description)) return true; 
			if (regex.test(author)) return true; 
		}
		return false; 
	});
}

function checkIfAllNull(filterParams) {
	let allNull = true; 
	for (let prop in filterParams) {
		if (filterParams[prop]) {
			allNull = false; 
		}
	}
	return allNull;
}

