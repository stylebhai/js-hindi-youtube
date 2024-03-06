//for
for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value is ${j} and outer loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ["batman", "superman", "iron-man"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// BREAK AND CONTINUE
 //for (let index = 1; index <= 20; index++) {
    //if(index === 5){
       // console.log(`5 is detected`);
       // break;
   // }
   //console.log(`value of index is ${index}`); 
 //}
 for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`5 is detected`);
        continue;
    }
   console.log(`value of index is ${index}`); 
 }