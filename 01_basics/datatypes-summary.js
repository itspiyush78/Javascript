// Primitive

// 7 types : string, number, boolean,null, undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3443576654356754n



// Reference (Non Primitive)

// Array, Objects ,functions

const heroes = ["Spiderman", "ironman", "shaktiman",]
let myObj ={
    name: "heroes",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

}
console.log(typeof outsideTemp)





// ++++++++++++++++++++++++++++++++++++++

// Stack Primitive), Heap (Non-Primitive)

let myYoutube = "itspiyush.78"

let anothername = piyush
anothername = "marvel"

console.log(piyush);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "piyush@google.com"

console.log(userOne.email);
console.log(userTwo.email);
