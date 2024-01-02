let score = false

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "98" => 98   Number will convert into a number

// "98sdf" => NaN (Not a Number)    This will not convert into a number but shows the type number, but when we actually print it, gives NaN.

// "Rishank" => NaN     String will not convert into number. Gives NaN.
//  true => 1; false => 0    



let isLoggedIn = "rishank"

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "34" => true
// "rishank" => true



let someNumber = 99

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);