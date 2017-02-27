const countWords = inputWords => {
  return inputWords.reduce(
    (countMap, word) => {
      countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
      return countMap;
    },
    {}
  );
};

module.exports = countWords;
