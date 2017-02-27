const countWords = inputWords => {
  return inputWords.reduce(
    (countMap, word) => {
      // increment or initialize to 1
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    },
    {}
  );
};

module.exports = countWords;
