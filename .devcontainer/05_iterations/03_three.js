const myObject = {
    js: "javascript",
    cpp: "C++",
    swift: "swift by Apple",
    rb: "ruby"
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//console.log(myObject["rb"]);
//console.log(myObject.rb);

const programming = ["rb","c++","js","swift"]
for (const key in programming) {
    //console.log(programming[key]);
}

//forEach
const coding = ["ruby","c++","java","python","solid"]
//coding.forEach( function(item){
  //  console.log(item);
//})
//coding.forEach( (item) => {
    //console.log(item);
//})
function printMe(item,index,arr){
    console.log(item,index,arr);
}
//coding.forEach(printMe)

const myCoding = [
    {
        language: "python",
        symbol: "pyt"
    },
    {
        language: "c++",
        symbol: "cpp"
    },
    {
        language: "java",
        symbol: "jv"
    }

]
myCoding.forEach((items) => {
    console.log(items.language);
})
