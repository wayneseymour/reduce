const inc = x => x + 1
const dec = x => x - 1
const double = x => x * 2
const halve = x => x / 2

const init = 1;

const pipeline = [
  inc,
  double,
  dec
]

const final = pipeline.reduce((acc, fn) => {
  return fn(acc)
}, init);

console.log(final)

const final2 = pipeline.reduceRight((acc, fn) => {
  return fn(acc)
}, init);

console.log(final2)
