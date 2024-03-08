const coding = ["ruby","c++","java","python","solid"]

//const values = coding.forEach( (item) => {
  //  console.log(item);
   // return item
//})

const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter( (num) => num > 4)
//const newNums = myNums.filter( (num) => {return num > 4})
//console.log(newNums);
//const newNums = []
//myNums.forEach( (num) => {
   // if(num > 4){
       // newNums.push(num)
   // }
//})
//console.log(newNums);
//const newNums = myNums.map( (num)=> num + 10)
//const newNums = myNums
                //     .map( (num) => num * 10)
                 //    .map( (num) => num + 1)
                  //   .filter( (num) => num >= 40)

//console.log(newNums);

//const myTotal = myNums.reduce( function(acc,currval) {
    //console.log(`acc value is ${acc} and currval is ${currval}`);
    //return acc + currval
//},3)
const myTotal = myNums.reduce( (acc,currval) => (acc + currval),5)

//console.log(myTotal);

const shoppingCart = [
    {
        itemname: "java course",
        price: 3000
    },
    {
        itemname: "data science",
        price: 999
    },
    {
        itemname: "C++ Course",
        price: 2999
    },
    {
        itemname: "Python Course",
        price: 5999
    }
    
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay);