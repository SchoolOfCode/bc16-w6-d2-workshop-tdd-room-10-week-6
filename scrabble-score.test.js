import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test, assert } from "vitest";
// calculateScrabbleScore()
test.each([
	["A", 1],
	["B", 3],
	["C", 3],
	["D", 2],
	["E", 1],
	["F", 4],
	["G", 2],
	["H", 4],
	["I", 1],
	["J", 8],
	["K", 5],
	["L", 1],
	["M", 3],
	["N", 1],
	["O", 1],
	["P", 3],
	["Q", 10],
	["R", 1],
	["S", 1],
	["T", 1],
	["U", 1],
	["V", 4],
	["W", 4],
	["X", 8],
	["Y", 4],
	["Z", 10],
])(`%s should return %i`, (letter, expected) => {
	expect(calculateScrabbleScore(letter)).toBe(expected);
});

test(`dog should equal 5`, () => {
	//arrange
	const word = "dog";
	const expected = 5;
	//act
	const actual = calculateScrabbleScore(word);
	//assert
	expect(actual).toBe(expected);
});

test.each([
	["DOG", 5],
	["BOG", 6],
	["JOG", 11],
	["QUEEN", 14],
	["JAVASCRIPT", 24],
	["THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG", 99],
])(`%s should return %i`, (letter, expected) => {
	expect(calculateScrabbleScore(letter)).toBe(expected);
});

test.each([
	{ word: "fr0g", expected: /unsupported/ },
	{ word: "99", expected: /unsupported/ },
	{ word: 99, expected: /unsupported/ },
	{ word: "£hello", expected: /unsupported/ },
	{ word: "hello world", expected: /unsupported/ },
])("should throw error if $word not A-Z a-z ", (word, expected) => {
	expect(() => calculateScrabbleScore(word)).toThrowError(expected);
});

test("if word uses all tiles points + 50", () => {
	// arrange
	const usedAllTiles = true;
	const word = "DABBLER";
	const expected = 62;

	// assert
	const actual = calculateScrabbleScore(word, usedAllTiles);

	expect(actual).toBe(expected);
});

test.each([
	["GERMAN", 9],
	["german", 9],
	["Golf", 8],
	["BiGGest", 11],
])("function accepts upper and lower case => %s", (word, expected) => {
	// assert
	const actual = calculateScrabbleScore(word);

	expect(actual).toBe(expected);
});
