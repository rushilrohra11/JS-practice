const accountId = 144533
let accountEmail = "rushil.rohra11@gmail.accountEmail"
var accountPass = "12345"
accountCity = "Mumbai"
let accountState
// dont use this type of declaration

// accountId = 2 allowed nahi hai!
accountEmail = "rushil@123.com"
accountPass = "1234"
accountCity = "Pune"


/*
preferring not to use var to avoid issue of a block scope and functional scope
*/

// console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState])
