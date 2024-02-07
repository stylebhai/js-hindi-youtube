// Primitive datatype
// 7 types-  String,Boolean,Number,null,undefined,BigInt,Symbol



const temp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id);
//console.log(anotherId);
//console.log(id === anotherId);

const bigNumber = 4512378542223658n;

// Reference datatype(Non Primitive)
// 3 types-  Arrays,Objects,Functions

const heroes = ["shaktiman", "nagraj","juniorG"];
let myObj = {
    name: "visvanath",
    age: 47
}

const myFunction = function(){
  console.log("hello world!");
}

//console.log(typeof id);

// Memory//
// Stack(Primitive) and Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom";
let anotherName = myYoutubeName;
anotherName = "chaiaursutta";

//console.log(myYoutubeName);
//console.log(anotherName);

let userOne = {
  email: "kashigoogle@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
