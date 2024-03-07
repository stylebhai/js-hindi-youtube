let index = 0
while (index <= 10) {
    //console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ["batman", "superman", "spiderman"]
//let arr = 0

//while (arr < myArray.length) {
    //console.log(`value is ${myArray[arr]}`);
    //arr++;
//}

let score = 11

do {
    //console.log(`score is ${score}`);
    score++;
} while (score <= 10);

//+++++++++++++++++++//

// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
   // console.log(`each greet is ${greet}`);
}

//++++++++++++++++++++++++++++++
//MAPS

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
map.set('IN',"India")
//console.log(map);

//for (const key of map) {
    //console.log(key);
//}

for (const [key, value] of map) {
    console.log(key,':-',value);
}