let marvelHeros = ['SpiderMan','AntMan','Captain America']
let dcHeros = ['SuperMan', 'Batman']

// Some Advanced array functions: 

let anotherArray = marvelHeros.concat(dcHeros);
// console.log(anotherArray)

let allHeros = [...marvelHeros,...dcHeros]
console.log(allHeros)

let someArray = [1,2,3,[1,2],[1,2,3,[4,5]]]
let someArrayFlattened = someArray.flat(Infinity)


console.log(typeof someArrayFlattened)

const score1 = 1500
const score2 = 2000
const score3 = 3000

let arrayOfScores = Array.of(score1,score2,score3);
console.log(arrayOfScores)

let name = "Ashutosh"
let nameArray = Array.from(name)
console.log(nameArray)
console.log(Array.isArray(name))

// ----------------------------------------------------------------------------------

/*  SUMMARY */

// 1. concat : concatenates 2 arrays
// 2.  ... operator : TRIM operation
// 3. Shallow Copy and Deep Copy
// 4. flatenning an array
// 5. Array.of 
// 6. Array.from
// 7. Array.isArray 
