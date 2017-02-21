const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const flattened = data.reduce((acc, val) => {
  return acc.concat(val)
}, [])

const input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
]

// flatmap: reduce just like map, filter
// Takes a list, and turns each value into an array

const stars = input.reduce((acc, val) => {
  val.cast.forEach(star => {
    if(acc.indexOf(star) === -1)
      acc.push(star)
  })

  return acc;
}, []);

const data2 = [1,2,3,4,"5"] //=> 105; It becomes 10 + "5" (string concat)
const sum = data2.reduce((acc, val, idx) => {
  console.log(idx)

  return acc + val;
}, 0)

console.log(sum)

const data3 = [1,2,3,4,"5"] //=> 054321;
const sum2 = data2.reduceRight((acc, val, idx) => {
  console.log(idx)

  return acc + val;
}, 0)

console.log(sum2)
