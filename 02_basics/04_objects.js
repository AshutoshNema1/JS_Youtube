// const tinderUser = {}

// console.log(tinderUser)

// const tinderUser = new Object({
//     id : 1,
//     email : "a@gmail.com"
// });

// console.log(tinderUser)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "q",
    5: "w",
    6: "e"
}

// const obj3 = {
//     obj1, obj2
// }

// obj 3 me {} ke andar obj1 object {} ke andar store hoga fir comma lagega fir se ek {} lagega aur uske andar obj2 store hoga

// if we want that obj 3 ka bas ek {} ho aur uske andar , seperated key/value pair ho to then use assign method of objects

// const obj4 = Object.assign(obj1, obj2)


// console.log(obj1)
// assign method obj1 and obj 2 ko concatenate kar ke ek target obj me store kar deta hai 
// yaha vo target object assign() method ke first paramter ko manta ai . agar aap nahi chahte ki aapka first obj ko alter kiya jaye to in that case ek {} laga dete i.e aise 
// const obj4 = Object.assign({}, obj1,obj2)
// console.log(obj4)
// yaha {} point out the target obj and that is obj4

// if we do not want to use the assign operator then we can again use the ... operator in js

const obj4 = {...obj1 , ...obj2}
// console.log(obj4)

// Destructuring an Object / Array 

let course = {
    courseName : "JavaScript in Hindi",
    courseInstructor : "hitesh",
    price : 999
}

// This below is de-structuring
// Ek pure structure se ek ek value ya to objectname.value kar ke nikal sakte
// for the purpose of clean code we perform de-structuring


// let {courseInstructor:ins,price} = course
// console.log(price)
// console.log(ins)


// ------------------------------------------------------------------------------------


// ye array me bhi hoti hai
let arr = [1,8,9,7,84]
let [first] = arr
console.log(first)