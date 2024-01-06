// On the basis of storage of data into the memory and how we can access of data efficiently, data types are categorized into two:- 
// Primitive and Non-Primitive (Reference)


//  Primitive Data Types
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// All primitive data types are Call By Value ( Changes will reflect into the copy)

let myname = "Rishank"      //String
const score = 100           //Number
const scoreValue = 100.3    //Number

const isLoggedIn = false     //Boolean
const outsideTemp = null     //Null

console.log(typeof outsideTemp);   // ***object type*** (Null ka typeof se data type 'object' aata h)

let userEmail;                  //undefined
let userAddress = undefined     //undefined

const id = Symbol('123')            //Symbol  (means unique, infact we pass same value)
const anotherId = Symbol('123')     //Symbol   (here both are unique)

// console.log(typeof id);             // symbol
console.log(id === anotherId);      //false

Symbol("foo") === Symbol("foo");   // false
// const sym = new Symbol();       // TypeError

// This prevents authors from creating an explicit Symbol wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, new Boolean, new String and new Number).

// If you really want to create a Symbol wrapper object, you can use the Object() function:

const sym = Symbol("foo");
// console.log(typeof sym);                    // "symbol"

const symObj = Object(sym);
// console.log(typeof symObj);                 // "object"


const bigNumber = 3456543576654356754n       //BigInt for bigger scientific values
// console.log(typeof bigNumber);       //bigint


// Reference (Non-Primitive Data Types)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]      // Array
console.log(typeof heros);       //**object type**

let myObj = {
    myName: "Rishank",
    myAge: 30
}                               // Object
console.log(typeof myObj);     //**object type**

 const myFucntion = function(){
    console.log("Hello World");
 }                                  // Function

 console.log(typeof myFucntion);     //**object function type**

//  ***return type of all non-primitive data types is object***

// https://262.ecma-international.org/5.1/#sec-11.4.3