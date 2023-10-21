// Data types are declared on the basis of how they are stored in the memory and how they can be fetched.

// On this basis we have 2 basic data types : 

// 1. Primitive 

/* 
    they are 

    number
    bigint
    string
    boolean
    null 
    undefined
    symbol

*/

// return type when typeof function is used on each of these funs is as follows 
let myNumber = 21
let myString = "abc"
let bigNumber = 12n
let myBool = true
let myNull = null
let myUndefined = undefined



// console.table([typeof myNumber,typeof myString,typeof bigNumber,typeof myBool,typeof myNull,typeof myUndefined])

// Non Primitive Data Types 

/*

1.Objects
2.Arrays
3.Functions 
*/

let myobj = {
    name : "Ashutosh",
    age : 21
}

let myArray = ["hey", "lo", "world"];

let myFunction = function(){
    console.log('Hello World');
}

console.table([typeof myobj, typeof myArray, typeof myFunction]);

// Remember 
// Interview question
//  NULL returns the data type object.
