//Ways to declare objects in js : 

// Singleton 
// It is obtained when we create objects using Constructor

// Object Literals 

let myObj = {}; // empty object

let mySymbol = Symbol("key1")

let myObj1 = {
    name: "Ashutosh",
    "full name" : "Ashutosh Nema",
    age : 21,
    isLoggedIn: false,
    // Values such as name full name age isLogged are written like this nut they are treated as strings, now suppose we want to create a symbol as a key then what do we do
    // here the symbol will be treated as the key mot the string(symbol)
    [mySymbol] : "Symbol"
}

let myObj2 = {
    name: "Ashutosh",
    "full name" : "Ashutosh Nema",
    age : 21,
    isLoggedIn: false,
    // Values such as name full name age isLogged are written like this nut they are treated as strings, now suppose we want to create a symbol as a key then what do we do
    // this here will treat mysymbol as string
    mySymbol : "Symbol"
}

console.log(myObj1)
console.log(myObj2)

// now accessing the object elements 

// console.log(myObj1.age)
// // or
// console.log(myObj1["age"]) <- this syntax is basically used when key is literally written as string 

// changing the value of js object 

myObj1.age = 25
console.log(myObj1.age)

// if i want that this age should not be changed then i can freeze the whole object itself

//Its syntax is 

// Object.freeze(myObj1)
// myObj1.age = 29
// console.log(myObj1.age)

