const myNumber = 25; 
// console.log(myNumber); // This returns number 

const newMyNumber = new Number(25);
// console.log(newMyNumber); // this returns an object number

const balance = new Number(100);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // usually used to add decimal digits after the number

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); // to add commas to the string and 'en-IN' for the Indian representation of number system


