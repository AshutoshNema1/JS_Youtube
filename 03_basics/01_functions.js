// function is a block of code written inside specefic scope

// how functions are declared in JS

function greeting(){
    return "Hello World"
}

// console.log(greeting());

function loginUserMessage(username){
    if(!username){
        return "No username added"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
//Interview Question + IMP => if no value is passed in to the f/n then it returns undefined in the placeholder i.e it returns undefined just logged in

// if we want undefined just logged in not to be printed then we can use if else logic


// suppose a user adds some item to his shopping cart , then we eant to return the sum of all these values what we do is we use rest(...) operator

function sumUserCart(...num){
    return num
}

console.log(sumUserCart(1220,7893,224.50,547))

// ye ... operator yaha par [] ke andar enclose kar raha hai

// passing array as an argument in the func

let myArr = [1,5,7,9]

function returnArrEle(someArr){
    return someArr[0]
}

console.log(returnArrEle(myArr))

// passing object as an argument in the function

let myObj = {
    username : "Jack",
    phnNo : 9454782487,

}

function returnObjData(someObj){
    return `Username is ${someObj.username} and his Phone number is ${someObj.phnNo}`;
}

console.log(returnObjData())