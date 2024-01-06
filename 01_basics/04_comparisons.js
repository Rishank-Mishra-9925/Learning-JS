// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)
// console.log("02" > 1)

// Jab b compare kre so make that the data types of both values must be same b/c in this type of conversion, many times the result is not predictable.


console.log(null > 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null == 0);

// The reason is that an equality check == and comparisons >,<,<=,>= works differently.  
// Comparisons convert null  to a number, treating it as 0.
// That's why null >= 0, null <= 0 is true and null == 0 is false.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Strict Check, it checks not only the values but their data types also
// === 

console.log("2" === 2);   // o/p=> false
console.log("2" == 2);     // o/p=> true (Here automatically data type conversion happens)