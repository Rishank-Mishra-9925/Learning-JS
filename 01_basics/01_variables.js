const accountId = 2345  //Declaring Constants, values can't be change.

let accountEmail = "rishank@google.com"  //Declaring Variables in latest
var accountPassword = "9876"            //Declaring Variables in older methods.
accountCity = "Delhi"   //This method of declaring variables is mot recommended.

let accountState; // Value not defined.


// accountId = 6789  //Not Allowed

accountEmail = "hello@rm.com"
accountPassword = "23455"
accountCity = "Mumbai"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])