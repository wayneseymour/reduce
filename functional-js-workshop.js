const countWords = inputWords => {
  return inputWords.reduce(
    (acc, curr) => {
      if (acc[curr]) acc[curr]++;
      else acc[curr] = 1;

      return acc;
    },
    {}
  );
};

module.exports = countWords;
