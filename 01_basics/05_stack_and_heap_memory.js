// Stack Memory (Primitive data type) ***Here we get the copy of the value, so when we change  the value, the orginal value doesn't change***

// Heap Memory (Non-Primitive data type)  ***Here we get the reference of the value(i.e. address), so when we change the value, the original value will change***

let youtubeName = "rishankmishra"

let anotherName = youtubeName
anotherName = "herewego"

console.log(youtubeName);   // rishankmishra  (Orignal value doesn't change)  {Stack memory Used}
console.log(anotherName);   // herewego


// For Non-Primitive

let userOne = {
    userEmail: "abcdef123@xyz.com",
    userUpi: "user@ybl"
}

let userTwo = userOne

userTwo.userEmail = "xyz@google.com"

console.log(userOne.userEmail);        // xyz@google.com
console.log(userTwo.userEmail);        // xyz@google.com

// Here original value got changed b/c reference is passed {Heap memory Used}