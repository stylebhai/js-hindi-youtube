// <,>,<=,>=,==,!=,===,!==
//const balance = 1000

//if (balance < 500){
   // console.log("less than 500");
//} else if(balance < 750){
    //console.log("less than 75");
//}else if(balance < 900){
   // console.log("less than 900");
//}else{
    //console.log("less than 1200");
//}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2 >= 3){
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail || 2 != 3){
    console.log("user logged in");
}