// Dates

let myDate = new Date()
//console.log(myDate.toISOString); 
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5,3)
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("02-01-2023") 
console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp =  Date.now();

//console.log(myCreatedDate.getTimeStamp)
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// '${newDate.getDay()} and time'

newDate.toLocaleString('defult',{
    weekday: "long", 

})