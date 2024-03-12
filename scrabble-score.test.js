import scrabbleScore from "./scrabble-score";

describe("scrabble score", () => {
  //prettier-ignore
  const letterScores = [
    ["a", 1], ["b", 3], ["c", 3], ["d", 2], ["e", 1],
    ["f", 4], ["g", 2], ["h", 4], ["i", 1], ["j", 8],
    ["k", 5], ["l", 1], ["m", 3], ["n", 1], ["o", 1],
    ["p", 3], ["q", 10], ["r", 1], ["s", 1], ["t", 1],
    ["u", 1], ["v", 5], ["w", 5], ["x", 8], ["y", 4],
    ["z", 10],
    ["A", 1], ["B", 3], ["C", 3], ["D", 2], ["E", 1],
    ["F", 4], ["G", 2], ["H", 4], ["I", 1], ["J", 8],
    ["K", 5], ["L", 1], ["M", 3], ["N", 1], ["O", 1],
    ["P", 3], ["Q", 10], ["R", 1], ["S", 1], ["T", 1],
    ["U", 1], ["V", 5], ["W", 5], ["X", 8], ["Y", 4],
    ["Z", 10],
  ];

  it.each(letterScores)("should score %s as %i", (letter, score) => {
    expect(scrabbleScore(letter)).toBe(score);
  });

  //prettier-ignore
  const wordScores = [
    ["car", 5], ["cat", 5], ["cab", 7],
    ["able", 6], ["four", 7], ["test", 4],
    ["ability", 62], ["cabbage", 64], ["bananas", 59],
    ["CAR", 5], ["CAT", 5], ["CAB", 7],
    ["ABLE", 6], ["FOUR", 7], ["TEST", 4],
    ["ABILITY", 62], ["CABBAGE", 64], ["BANANAS", 59],
  ]

  it.each(wordScores)("should score %s as %i", (word, score) => {
    expect(scrabbleScore(word)).toBe(score);
  });

  it("should throw if word contains non-alpha characters", () => {
    // NB the arrow function in the expect call. This allows the assertion
    // to call the arrow function when required, and catch the error.
    expect(() => scrabbleScore("gjta4%^&")).toThrow("Invalid Tile Characters");
  });

  it.each(letterScores)(
    "should double %s letter score of %i",
    (letter, score) => {
      expect(scrabbleScore(letter, ["double-letter"])).toBe(score * 2);
    }
  );

  it.each(letterScores)(
    "should triple %s letter score of %i",
    (letter, score) => {
      expect(scrabbleScore(letter, ["triple-letter"])).toBe(score * 3);
    }
  );

  it.each(letterScores)(
    "should double %s word score of %i",
    (letter, score) => {
      expect(scrabbleScore(letter, ["double-word"])).toBe(score * 2);
    }
  );

  it.each(letterScores)(
    "should triple %s word score of %i",
    (letter, score) => {
      expect(scrabbleScore(letter, ["triple-word"])).toBe(score * 3);
    }
  );

  const premiumSquares = [
    ["car", 10, ["double-letter", "double-letter", "double-letter"]],
    ["cat", 6, [, "double-letter"]],
    ["cab", 10, [, , "double-letter"]],
    ["able", 7, ["double-letter"]],
    ["four", 9, [, "triple-letter"]],
    ["four", 18, ["double-word", "triple-letter"]],
    ["four", 27, [, "triple-letter", , "triple-word"]],
    ["test", 5, [, , "double-letter"]],
    ["fast", 10, [, "triple-letter", , "double-letter"]],
    ["fast", 20, ["double-word", "triple-letter", , "double-letter"]],
    ["fast", 30, ["triple-word", "triple-letter", , "double-letter"]],
  ];
  it.each(premiumSquares)(
    "should score %s with multipliers as %i",
    (word, score, multipliers) => {
      expect(scrabbleScore(word, multipliers)).toBe(score);
    }
  );
});
