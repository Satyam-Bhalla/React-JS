// Interpreter Language
// Scripting Language

// ES5
// ES6 new version - ECMA2015

// Variable
// console.log("Hi from the intro.js file");

// var

// var age = 10;
// var name = "Jake";

// age = 11;

// console.log(age, name);

// // let and const - ES6

// let score = 100;
// score = 200;
// console.log('ES6 let variable', score);

// const PI = 3.14;
// console.log(PI);
// PI = 3.16;


// Data Types in JS
/**
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. Undefined
 *  5. Null
 *  6. Objects
 *  7. Symbols(ES6)
 */

// Number

    // var scoreOne = 10;

    // var scoreTwo = 20;

    // var temp = -35;

    // console.log(scoreOne, scoreTwo, temp);

    // // BEDMAS (Bracket Exponential Divsion Multiplication Addition Substraction)
    // // Operators + - ^ / * %

    // // var result = (10 * scoreOne)/(scoreTwo - scoreOne)*scoreOne;

    // var result = scoreTwo + temp;
    // console.log(result);


// String

    // let name = 'Jack';
    // let address = 'London';
    // let phrase = " it's raining outside ";

    // // console.log(name, address, phrase);

    // // concatenation

    // let summary = name + ' is living in ' + address + ' He says: ' + phrase;

    // // console.log(summary);

    // // console.log(phrase.toUpperCase());
    // // console.log(phrase.length);
    // // console.log(phrase.lastIndexOf('i'));

    // // Problem statement extract the substring after it's
    // // console.log(phrase.lastIndexOf('outside'))
    // // console.log(phrase.slice(phrase.indexOf('raining'), phrase.lastIndexOf('outside')));

    // // console.log(phrase.slice(20, 3))
    // // console.log(phrase.substring(20, 3))

    // var newPhrase = phrase.trim();

    // console.log(phrase);
    // console.log(newPhrase);


// Boolean (True False)

    // let lie = 0; // false
    // let truth = 1; // Truth 1 or any value
    // let isLogin = false;

    // console.log(true, false, 'true', 'false', lie, truth);
    // console.log(isLogin.valueOf());


// Null and Undefined
    // the type of null is an object but the type of undefined is undefined.
    // let score = 0;
    // let name = 'Nathan';
    // let isLogin = false;
    // let totalGames = null; // typeof is object ?
    // let likes ;
    // console.log( typeof null,typeof undefined);
    // score = score + 1; // NaN

    // console.log('I have a score of', score);

    // console.log( score, score + null, 'score');

    // console.log(typeof score);
    // console.log(typeof name);
    // console.log(typeof isLogin);
    // console.log(typeof totalGames);
    // console.log(typeof likes);

// truthy and falsy

    // Falsy values - null, NaN, undefined, 0, false, ''
    // Everything else is truthy (ex: infinity)

    // let result = -7/0; // True value (infinity)
    // console.log(typeof result);
    // let isLogin;
    // let score = 0;
    // let name = 'A';

    // if(result){
    //     console.log("Inside if");
    // }else{
    //     console.log('result was false');
    // }

// Explicit and Implicit Conversions

    // let score = 120930912093;
    // let isLogin = false; // Boolean
    // let likes = '10';

    // let result = isLogin + 1; // Implicit Conversion Number
    // let total = 1 + Number(likes) ;  // Explicit Conversion

    // console.log(total);

// Arrays 
    // let score;
    // // let subArr = 
    // let arr = ['John', 24, null, true, [1,2,3]];
    // console.log(arr);


    // // Why does it return false ?????
    // console.log(arr.includes([1,2,3]));

    // // console.log(arr.length);
    // // console.log(typeof arr.join('||'));

    // // console.log(arr.includes());
    
    // // console.log(arr.indexOf("score")); // -1 

    // let names = ['Jon', 'Arya', 'Sansa', 'Tyrion'];

    // let userValue = 'Danny';

    // if(names.includes(userValue)){
    //     console.log('Welcome!!');
    // }else{
    //     console.log('Access Denied!!!');
    // }

    
// Scope of the Variable

// var count = 0;

// if(true){
//     count = 1;
//     count = count + 1; 
//     if(true){
//         console.log(count)
//     }
// }

// console.log(count);

// Blocked Scoped
// let score = 0; // Global Variable

// if(true){
//     let scoreOne = 1;
//     score = score + 1; 
//     console.log(score);
//     if(true){
//         // let score = 10;
//         console.log(scoreOne)
//     }
// }

// console.log(score);
// console.log(scoreOne);

// const score = 0; // Global Variable

// if(true){
//     const scoreOne = 1;
//     // score = score + 1; 
//     console.log(score);
//     if(true){
//         // let score = 10;
//         console.log(scoreOne)
//     }
// }

// console.log(score);
// console.log(typeof scoreOne);

// Symbol
// let sym1 = Symbol()
// let sym2 = Symbol('foo')
// let sym3 = Symbol('foo')
// console.log(sym1);
// Symbol('foo') === Symbol('foo')  // false
// let sym = new Symbol()  // TypeError
// let sym = Symbol('foo')
// typeof sym      // "symbol" 
// let symObj = Object(sym)
// typeof symObj   // "object"





/* Functions */



// Calling a function
// greeting();
// console.log(greet);
// console.log(nm);
// console.log(age);


// var nm = 'Flag';
// let age = 10;

// // Function declaration
// function greeting(){
//     console.log('Good Evening Everyone');
// }

// // Function expression
// var greet = function(){
//     console.log('Function Expression');
// }


// Arguments and Parameter

    // console.log( 'String'.toUpperCase())
    // const calcPerimeter = function(radius){ // Parameter
    //     // let value = 2*3.14*radius;
    //     return 2*3.14*radius;
    // }

    // let result = calcPerimeter(2); // argument - 2
    // console.log(result);
    // console.log('Perimeter of a circle with a radius of 5', calcPerimeter(5));

// ES 6 Arrow Functions

    // const PI = 3.14;
    // let option = Math.floor(Math.random()*2);
    // let result = 0;

    // console.log(Math.random()); 
    // console.log(Math.ceil(Math.random()*100));
    // console.log(Math.floor(Math.random()*100));

    // const calcPerimeter = function(radius) {
    //     return 2*PI*radius;
    // }
    
    // const calcArea = radius => PI*radius**2;

    // const display = result => console.log(result) ;  

    // if(option === 0){
    //     result = calcPerimeter(3);
    //     display(result);
    // }else{
    //     result = calcArea(3);
    //     display(result);
    // }

    // console.log( 0 == '0'); // Loose comparision
    // console.log(0 === '0'); // Strict Comparision


// Callbacks

    // const myFunc = (callback) => {
    //     let value = 10;
    //     callback(value);
    // }

    // const callbackFunc = (value) => {
    //     console.log('Inside Callback', value);
    // }

    // myFunc(callbackFunc);

    // [1, 2, 3, 4, 5].forEach( item => {
    //     for(let i = 1; i < 11; i++){
    //         console.log(item + '*' + i + '=', (item * i));
    //     }
    // });

// Task 

// Write a function that displays the greeting method 
// of a country based on the choice of a user.
// const countries = ['India', 'Australia', 'Germany', 'France', 'USA'];


// Asynchronous Request 
// fetch('https://jsonplaceholder.typicode.com/todo/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// console.log('I am a code after the request');