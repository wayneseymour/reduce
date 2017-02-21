const log = console.log;
const data = [1,2,3];

const doubled = data.reduce((acc, value) => {
  acc.push(value * 2);

  return acc;
}, []);

const doubleMapped = data.map(x => x * 2)

const data2 = [1,2,3,4,5,6];
const evens = data2.reduce((acc, val) => {
  if (val % 2 === 0) 
    acc.push(val);

  return acc;
}, []);

const evenFiltered = data2.filter(x => x % 2 === 0);

const filterMapped =
  data2
    .filter(x => x % 2 === 0)
    .map(x => x * 2);

const bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData')
const filterMappedBigData =
  bigData
    .filter(x => x % 2 === 0)
    .map(x => x * 2);
console.timeEnd('bigData')

console.time('bigDataReduce');
const reducedBigData = bigData.reduce((acc, val) => {
  if (val % 2 === 0)
    acc.push(val * 2);

  return acc;
}, []);
console.timeEnd('bigDataReduce');
