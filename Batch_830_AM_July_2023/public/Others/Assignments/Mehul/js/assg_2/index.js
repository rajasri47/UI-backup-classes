var stuName = prompt("enter name");
var age = prompt("enter age");
var eng = parseInt(prompt("enter english mark")),
  mat = parseInt(prompt("enter maths mark")),
  che = parseInt(prompt("enter chemistry mark")),
  hin = parseInt(prompt("enter hindi mark")),
  phy = parseInt(prompt("enter physics mark"));

var avg, total;
total = eng + mat + che + hin + phy;
avg = total / 5;

console.log(" name is " + stuName);
console.log("age is " + age);
console.table("total marks is " + total);
console.log(" avg percent is " + avg + "%");

if (avg > 33) {
  console.log("You have passed");
} else {
  console.log("Failed!! , Best of Luck for the next time");
}
