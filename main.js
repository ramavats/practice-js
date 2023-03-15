// Challenge #2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);

// Challenge #3

const words = ["coder", "programmer", "developer"];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);
