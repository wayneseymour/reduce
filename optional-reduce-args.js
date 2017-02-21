const reducer = (acc, val, idx, arr) => {

  const intermediate = acc + val;

  if (idx === arr.length - 1)
    return intermediate / arr.length

  return intermediate;
};

var data = [1,2,3,3,4,5,3,1]

var mean = data.reduce(reducer, 0);


console.log(mean);
