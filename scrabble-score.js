//prettier-ignore
const letterScores = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4,
  g: 2, h: 4, i: 1, j: 8, k: 5, l: 1,
  m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
  s: 1, t: 1, u: 1, v: 5, w: 5, x: 8,
  y: 4, z: 10
};

const letterMultipliers = {
  "double-letter": 2,
  "triple-letter": 3,
};

const wordMultipliers = {
  "double-word": 2,
  "triple-word": 3,
};

export default function (word, premiumSquares = []) {
  word = word.toLowerCase();
  if (/[^a-z]/.test(word)) throw "Invalid Tile Characters";
  const letters = [...word];
  const scores = letters.map((l, i) => {
    const multiplier = letterMultipliers[premiumSquares[i]] || 1;
    return letterScores[l] * multiplier;
  });
  let totalScore = scores.reduce((total, score) => total + score, 0);
  premiumSquares
    .filter((multiplier) => wordMultipliers[multiplier])
    .forEach((multiplier) => (totalScore *= wordMultipliers[multiplier]));
  if (letters.length === 7) totalScore += 50;
  return totalScore;
}
