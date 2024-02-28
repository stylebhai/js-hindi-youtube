// singleton
// Object.create

// object literals
const mySym = Symbol("key1");

const JsUser = {
    "full name": "Hitesh Choudhary",
    name: "Hitesh",
    age: 15,
    [mySym]: "myKey1",
    location: "Nagpur",
    email: "hitesh@google.com" ,
    isLoggedIn: false,
    lastLoggedIn: ["monday","saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//console.log(JsUser)