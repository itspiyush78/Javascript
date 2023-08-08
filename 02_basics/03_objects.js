// singleton 
//object create

// object literals

const mySym = Symbol("key1");


const JsUser = {
    name : "piyush",
"full name": "piyush singh",
[mySym] : "mykey1",
    age: 18,
    location: "azamgarh",
    email: "piyush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sun", "Mon",]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log([mySym])

JsUser.email = "piyush@chat.com"
Object.freeze(JsUser)
JsUser.email = "piyush@chat.com"
console.log(JsUser);

JsUser.greeting = function()
