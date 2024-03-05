const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()
//console.log(this)

//function chai(){
   // let username = "hitesh"
    //console.log(this.username);
//}

//onst chai = function (){
    //let username = "hitesh"
    //console.log(this.username)
//}

const chai =  () => {
    let username = "hitesh"
    console.log(this)
}

//chai()

//const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username: "hitesh"})

console.log(addtwo(3,4))