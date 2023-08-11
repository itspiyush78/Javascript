function sayMyName() {
console.log("P");
console.log("I");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");
}


//sayMyName();

//function addTwoNumbers(number1, number2) {

  //  console.log(number1+    number2);
//}

function addTwoNumbers(number1, number2) {

    //let result = number1 + number2;
    //return result 
    return number1 + number2; 
}

const result = addTwoNumbers(3, 5 )

//console.log("result:", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return'${username} just logged in'
}

//console.log(loginUserMessage("piyush"))
console.log(loginUserMessage("Piyush"))


function calculateCartPrice(...num1){
      return num1   
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 199
}

function handleObjects(anyobject){
    console.log('Username is ${} and price is ${}');
}
