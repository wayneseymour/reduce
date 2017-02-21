const data = [15, 3, 20];

// reducer and initial value of the accumulator

const reducer = (accumulator, item) => {
  return accumulator + item;
};

const initialValue = 0;

const total = data.reduce(reducer, initialValue);

console.log("Sum: ", total);

