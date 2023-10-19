// Suppose we want to convert a particular data type to another datatype in JS

let age = undefined

console.log(typeof age)

let ageToNumber = Number(age)
console.log(ageToNumber)

// type conversion : 

// string -> number possible only if string is purely a number
// string -> number if string is mix of number + letter like 33abc not possible 
// o/p in such case would be Nan and type will be converted to number

// null -> number possible null changes to 0
// undefined -> number possible undefined changes to Nan
// bool True -> changes to 1
// bool False -> changes to 0