// console.log("This is class1.js");


// var a = 123;
// console.log(a);

// function abc(){
//     console.log("This is a function named 'a'");
//     function b() {
//         console.log("This is a function named 'b'");
//     }
//     b();
// }

// abc();  
// console.log(a); // This will log the function definition, not the number 123


// var a = 123;
// console.log(a);

// xyz();
// var xyz = ()=> {
//     console.log("This is a function named 'xyz'");
// }


//! Types of errors in JavaScript
// 1. Syntax Error: Occurs when the code is not written correctly.
// 2. Reference Error: Occurs when a variable is not defined.
// 3. Type Error: Occurs when a value is not of the expected type.
// 4. Range Error: Occurs when a value is not within the expected range.

// Example of Syntax Error
// console.log("This is a syntax error"
// This will throw a SyntaxError because the closing parenthesis is missing.
// Example of Reference Error
// console.log(b);
// This will throw a ReferenceError because 'b' is not defined.
// Example of Type Error
// var c = 123;
// c.toUpperCase();
// This will throw a TypeError because 'toUpperCase' is not a function for numbers.
// Example of Range Error
// var d = new Array(-1);
// This will throw a RangeError because the array size cannot be negative.

// {
//     // COMPOUND STATEMENTS
//     var a = 1;
//     var b = 2;
//     var c = 3;

//     // console.log(d);
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// function abc(){
//     var a = 1;
//     var b = 2;
//     var c = 3;
//     function def(){
//         var d = 4;
//         function ghi(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }
//         ghi();
//     }
//     def();
// }

// abc();

// for(var i = 0; i < 4; i++){
//     function closure(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     }
//     closure(i);
// }


//! HOF
// function ab(cd){
//     console.log("This is a function named 'ab'");
//     return cd();
// }

// function cd(){
//     console.log("This is a function named 'cd'");
// }

// ab(cd);


// console.log("Script started");

// setTimeout(() => {
//     console.log("i am going to restroom");
// },4000);

// setTimeout(() =>{
//     console.log("i am back from restroom");
// },3000);

// function walkRestaurant(cb) {
//     console.log("Walking to the restaurant");
//     setTimeout(cb, 2000);
// }

// function menuCheck(cb){
//     console.log("Checking the menu");
//     setTimeout(cb, 6000);
// }

// function foodOrder(cb) {
//     console.log("Ordering food");
//     setTimeout(cb, 8000);
// }

// function paybill(cb) {
//     console.log("Paying the bill");
//     setTimeout(cb, 3000);
// }

// function walkAwayFromRes(){
//     console.log("Walking away from the restaurant");
// }

// walkRestaurant(() => {
//     menuCheck(() => {
//         foodOrder(() => {
//             paybill(() => {
//                 walkAwayFromRes();
//             });
//         });
//     });
// });


// console.log("Script ended");

// let arr = [2,3,4,6,8,5]

// function doubleArrVal(arr){
//     let newArr = [];
//     //? using double with map to double the values in the array
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }

// console.log(doubleArrVal(arr));

//! Array.prototype
// let arr = [2, 3, 4, 6, 8, 5];
// Array.prototype.double = function(data,logic) {
//     let newArr = [];
//     for (let i = 0; i < data.length; i++) {
//         newArr.push(logic[this[i]]);
//     }
//     return newArr;
// };

// function tripe(x){
//     return x*x*x;
// }

// console.log(arr.double(tripe(arr))); 


// let cart = ["shoes","shirt","wallets"];

// function orderDetail(cart){
//     //1. total no. of product
//     //2. total amount of products no.s *1000
//     let totalProducts = cart.length;
//     let totalAmount = totalProducts * 1000; // assuming each product costs 1000
//     return {
//         totalProducts: totalProducts,
//         totalAmount: totalAmount
//     };
// }

// function orderSummary(){
//     // total price and total product
//     // then generate order id
//     let orderDetails = orderDetail(cart);
//     let orderId = Math.floor(Math.random() * 1000000);
//     return {
//         orderId: orderId,
//         totalProducts: orderDetails.totalProducts,
//         totalAmount: orderDetails.totalAmount
//     };
// }

// function paymentGateway(){
//     // order Id , product details and price ..  payment is successfull
//     // return
    

// }

// function successfullOrder(){
//     // it will give all the details about the payment product name and everything
// }


// // build a filter prototype method for array
// Array.prototype.myFilter = function(callback) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };
// // Example usage
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.myFilter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]


// function welcome(){
//     console.log(welcomeMessage+" "+this.studentName+" is a student of class "+this.studentClass+" "+goodbymessage);
// }

// const student1 = {
//     studentName: "suraj",
//     studentClass: "g4"
// }

// const student2 = {
//     studentName: "karan",
//     studentClass: "g5"
// }


// const s1 = welcome.bind(student1)
// const s2 = welcome.bind(student2)
// const welcomeMessage = "Welcome to the class, ";
// const goodbymessage = "Goodbye!";
// s1();
// s2();

//! Bind, Call, Apply
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// The call() method calls a function with a given this value and arguments provided individually.
// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

//! Event Bubbling and Capturing
// Event Bubbling: The event starts from the target element and bubbles up to the root of the DOM tree.
// Event Capturing: The event starts from the root of the DOM tree and goes down to the target element.

// Example of Event Bubbling

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandparent = document.getElementById("grandparent");

grandparent.addEventListener("click", () =>  {
    console.log("Grandparent clicked");
},true);

parent.addEventListener("click", () => {
    console.log("Parent clicked");
},true);

child.addEventListener("click", () => {
    console.log("Child clicked");
},true);
