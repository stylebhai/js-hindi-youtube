// Dates

//let myDate = new Date();
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024,0,26,5,3)
//let myCreatedDate = new Date("01-26-2024")
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: ''
})