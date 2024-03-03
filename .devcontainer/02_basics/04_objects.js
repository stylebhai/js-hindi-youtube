 //const tinderUser = new Object()      //singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullName: {
        userFullname: {
            firstName: "hitesh",
            lastName: "choudhary"
        }
    }
}

//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullname)
//console.log(regularUser.fullName.userFullname.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))
//console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "hitesh"
} 

//console.log(course.courseInstructor);

//const {courseInstructor} = course
//console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);