const accountId = 144553
let accountEmail = "piyush@google.com"
var accountPassword = "12345"
accountCity = "Azamgarh"

// accountId = 2     // not allowed  

accountEmail = "ph@ph.com"
accountPassword = "21212121"
accountCity = "Lucknow"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/* 
 Prefer not to use var 
 because of issue in block scope and functional scope
*/