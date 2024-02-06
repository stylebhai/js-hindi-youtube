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

console.log(typeof id);