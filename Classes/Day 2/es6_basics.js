// Objects Literals

// let name = 'John';
// let age = 27;
// let email = 'john@doe.com';
// let hobbies = ['Reading', 'Music', 'Cooking'];

// let userOne = {
//     name: 'John', // key value pair.
//     age: 27,
//     email: 'john@doe.com',
//     hobbies: ['Reading', 'Music', 'Cooking'],
//     address: 'London', 
//     login(){
//         console.log(this)
//         // console.log('I have logged in!!!')
//         // return this;
//     },
//     logout(){
//         console.log(this);
//         // console.log('I have logged out!!!')
//     },
//     logHobbies(){
//         // console.log(this.hobbies);
//         // for( let i=0; i<this.hobbies.length; i++){
//         //     console.log(this.hobbies[i]);
//         // }

//         // forEach
//         this.hobbies.forEach( function(elements, i){
//             console.log(elements+ '::' + i);
//         } );
//         return this;
//     }   
// }

 
// userOne.login();
// // userOne.logHobbies();
// userOne.logout();

// let message = 'Hi '+ userOne.name + ' Welcome to our website!!'; 

// let props = 'age';

// // let contactDetail = userOne['email']
// console.log(userOne[props]);
// // console.log(userOne.contactDetail);


// userOne.logHobbies();

// this keyword
// gives us the context of the object

/**
 *    If we add any other element to the array after 
 *    the object will the forEach work for the new item? 
 *       NO 
 */
 

 // Method Chaining
    // this.logHobbies();
    // userOne.login().logHobbies().logout();
    
// ES6 classes
// class Profile {
//     constructor(name, email, age){
//         this.name = name;
//         this.email = email;
//         this.count = 0;
//     }
//     login(){
//         console.log(this.name, 'has logged in!!');
//         return this;
//     }
//     logout(){
//         console.log(this.name, 'has logged out!!');
//         this.count = 0;
//         return this;
//     }
//     counter(){
//         this.count++;
//         console.log(this.name, 'has a count of ', this.count);
//         return this;
//     }
// }

// Inheritence
// class Admin extends Profile{

//     deleteUser(user){
//         // console.log('I am a super user who can delete people!!')
//         users = users.filter( u => user.email !== u.email );
//     }
// }

// console.log(userOne instanceof User);

// let user1 = new Profile('Jon', 'jon@abc.com', 20);
// let user2 = new Profile('Jack', 'jack@abc.com');
// let user3 = new Profile('Jill', 'jill@abc.com', 25);
// let admin = new Admin('Admin', 'admin@admin.com', 30);
// userOne.login().counter().counter().counter().counter().logout();
// userTwo.login().counter().counter().logout();
// userOne.counter();
// admin.login();

// let users = [userOne, userTwo, userThree];
// console.log(users)

// admin.deleteUser(userThree)
// console.log(users);

// console.log(user1);
// console.log(admin);


// console.log(new String());

// let num = new Number(20);
// console.log(num instanceof Number);
// console.log(typeof num);

// let numTwo = 24;
// console.log(numTwo instanceof Number)

// let str = new String('Jack');
// console.log(str instanceof String);
// console.log(userOne.age instanceof Number);
// console.log(typeof userOne.age);

// Destructuring
// list "matching"
// var [a, , b] = [1,2,3];
// console.log(a)
// console.log(b)
// Objects can be destructured as well.
// nodes = () => { return {op: "a", lhs: "b", rhs: "c"}}
// var { op: a, lhs: b , rhs: c } = nodes()
// console.log(a)
// console.log(b)
// console.log(c)

// Concatenation
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// Spread Operator
// var parts = ["shoulders", "knees"];
// var lyrics = ["head", ...parts, "and", "toes"]; 

// console.log(lyrics)

// Spread + Object Literals
// Cool stuff with this in object creations.
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); 
// console.log(y); 
// console.log(z); 

// Spread properties
// let n = { x, y, ...z };
// console.log(n); 

// We can allow unlimited params to function by using the rest operator.

// function demo(part1, ...part2) {
//     return {part1, part2}
// }

// console.log(demo(1,2,3,4,5,6))


// For in loop
// let list = [4, 5, 6];

// console.log(list)

// for (let i in list) {
//    console.log(i);
// }

// For of loop
// let list = [4, 5, 6];

// console.log(list)


// for (let i of list) {
//    console.log(i); 
// }

// Set
// Sets as in the mathematical counterpart where all items are unique.

// var set = new Set();
// set.add("Potato").add("Tomato").add("Tomato");
// console.log(set.size)
// console.log(set.has("Tomato"))

// for(var item of set) {
//    console.log(item)
// }



//Map
// map([🌽, 🐮, 🐔], cook)
// => [🍿, 🍔, 🍳]
// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]




// Filter
// filter([🍿, 🍔, 🍳], isVegetarian)
// =>  [🍿, 🍳]
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])


// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]

// const students = [
//   { name: 'Quincy', grade: 96 },
//   { name: 'Jason', grade: 84 },
//   { name: 'Alexis', grade: 100 },
//   { name: 'Sam', grade: 65 },
//   { name: 'Katie', grade: 90 }
// ];
// const studentGrades = students.filter(student => student.grade >= 90);
// console.log(studentGrades); 

// console.log("abc".repeat(3) )
