function myName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//myName
//myName();

//function addNumb (num1,num2){
   // console.log(num1 + num2);
//}
//const result = addNumb(3,5)
//console.log("Result:",result,"hello");

function addNumb (num1,num2){
    let result = num1 + num2
    return result;
}

const result = addNumb(3,5);
//console.log("Result:",result,"hello");

//function userLogged (username){
    //if(username === undefined){
       // console.log(`please enter a username`);
       // return
    //}
    //return `${username} just logged in`
//}
//userLogged("hitesh")
//console.log(userLogged("hitesh"));
//console.log(userLogged(""));
function userLogged (username = "sam"){
    if(!username){
        console.log(`please enter a username`);
        return
    }
    return `${username} just logged in`
}

//console.log(userLogged());
//console.log(userLogged("hitesh"));

//function addToCart (numr){
    //return numr
//}
//console.log(addToCart(5));
//function addToCart (...numr){      // REST operator
   // return numr
//}

function addToCart (val1,val2,...numr){
    return numr
}

//console.log(addToCart(200,500,600,2000));

const user = {
    userName: "santosh",
    price: 999
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
//handleObject(user)
//handleObject({
   // userName: "sam",
    //price: 350
//})

const newArray = [230,540,655,1000]

function giveSecondValue (setArray){
    return setArray[1]
}
//console.log(giveSecondValue(newArray));
console.log(giveSecondValue([1,6,8,9]));