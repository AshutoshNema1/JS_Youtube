// there are basically two types of code written in JS: 
// one in the older version of JS and one in the newer version.

// We should try to write the code in only one version because only then the engine / compiler / interpreter would be able interpret the code effectively.

// to make the engine aware of what version of Js we are using 
// JS developers use this notation:

"use strict";

// this notation tells the browser that treat every line of code as new version of JS

// --------------------------------------------------------------------------------

// in the browsers we can write 
// alert("Stop")

// but here in node we cannot write alert there is some different way to wite it here

// --------------------------------------------------------------------------------

// code readability should be high

console.log('Ashutosh')

console.log(
    "Ashutosh"
)

// data types in JS

let name = "Ashutosh"
let age = 21
let isLoggedIn = false

// some of the basic data types in JS are :


// Primitive Data Types
// 1.string
// 2.number(range 2 to the power 53)
// 3.boolean
// 4.undefined -> is not defined yet
// 5.null -> has no value assigned to it yet
// 6.bigint (typically used in websites such as Fb, Reddit(where customers are present in large quantities.))
// 7.symbol 

// -------------------
// non primitive
// object


// interesting thing in js : 
// may be an error that the type of null is shown as object whereas the type of undefined is shown as undefined

console.log(typeof "abc");
console.log(typeof null)
console.log(typeof undefined)
