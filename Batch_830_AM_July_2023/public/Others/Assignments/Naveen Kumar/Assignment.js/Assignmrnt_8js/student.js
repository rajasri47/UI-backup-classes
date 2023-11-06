var studname = "Rohan";
var age = "24";
var maths = parseInt(prompt("enter maths mark"));
var physics = parseInt(prompt("enter physics mark"));
var english = parseInt(prompt("enter english mark"));
var chemestry = parseInt(prompt("enter chemestry mark"));
var biology = parseInt(prompt("enter biology mark"));

var total = maths + physics + english + chemestry + biology;
var avg = total / 5;

console.log("name is " + studname);
console.log("age is " + age);
console.log("total is " + total);
console.log("Avg is " + avg);
console.log("enter english mark " + english);
console.log("enter physics mark " + physics);
console.log("enter maths mark " + maths);
console.log("enter chemestry mark " + chemestry);
console.log("enter biology mark " + biology);
console.log("type of student name " + typeof studname);
console.log("type of student age " + typeof 24);
