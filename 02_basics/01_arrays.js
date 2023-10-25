let myArr = [0,1,2,3,4,5]
// console.log(myArr)

// console.log(typeof myArr)

const newArr = new Array("let's code", "with me", "hello");

// console.log(typeof newArr)

// console.log(myArr.indexOf(5));



let mynewArr = [1,2,3,4,5]
// let anotherArr = mynewArr

// anotherArr.push(7)
// console.log(mynewArr);
// console.log(anotherArr); // Heap memory and referencing
// mynewArr.pop()
// console.log(mynewArr);
// console.log(anotherArr);

// DIFFERENCE BEWTWEEN SPLICE AND SLICE (Common Interview Quest)

console.log('A ->', " Original Array ",mynewArr);
// slicing 
console.log("Sliced Array",mynewArr.slice(1,3))

console.log('B ->', " Array after slicing",mynewArr);
console.log("/n");
// splicing

console.log('A ->', " Original Array ",mynewArr);

console.log("Spliced Array -> ", mynewArr.splice(1,3))

console.log('B -> ', "Array after splicing ", mynewArr)


