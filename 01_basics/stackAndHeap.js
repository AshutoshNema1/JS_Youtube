// Primitive Data Types gets stored in Stack Memory 
// For eg 

let variable1 = "Hello"
let variable2 = variable1

// ab var 2 ko change kar diya to kya var 1 change hoga ? 

// answer is no

variable2 = "World"

console.log(variable1)
console.log(variable2)

// Aisa isiliye kyuki yaha stack memory use ho rahi hai aur variable 2 me copy of var 1 ja rahi hai

// now in non- primitive type
// yaha heap memory me data store ho raha hai 
// to userOne ka ek reference yaha par user2 ko gya that is heap mem me ek hi cheez store hai ab two alag alag var usko point kar rahe hai thats why ek ko change karne par dusra bhi change ho gaya

let userOne = {
    email : "ashutoshnema@gmail.com",
    pass : "abc"
}

let userTwo = userOne;
userTwo.email = "google@google.com"
console.log(userOne.email);
console.log(userTwo.email);