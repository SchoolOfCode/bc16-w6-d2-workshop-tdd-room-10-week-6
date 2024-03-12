//object of letter keys and their scabble values

export function calculateScrabbleScore(word, usedAllTiles) {
	const upperCaseWord = word.toUpperCase();
	let score = 0;
	const letterValues = {
		A: 1,
		B: 3,
		C: 3,
		D: 2,
		E: 1,
		F: 4,
		G: 2,
		H: 4,
		I: 1,
		J: 8,
		K: 5,
		L: 1,
		M: 3,
		N: 1,
		O: 1,
		P: 3,
		Q: 10,
		R: 1,
		S: 1,
		T: 1,
		U: 1,
		V: 4,
		W: 4,
		X: 8,
		Y: 4,
		Z: 10,
	};
	//check if alpha with REGEX .test() regex method
	if (!/^[a-zA-Z]*$/.test(word)) {
		throw new Error(`unsupported characters in ${word}`);
	}
	if (usedAllTiles === true) {
		score += 50;
	}

	//loop over each character in string word
	for (let i = 0; i < upperCaseWord.length; i++) {
		// update score with value of each letter
		score += letterValues[upperCaseWord[i]];
	}
	return score;
}
