var empName = prompt("Enter the name");
var gender = prompt("Enter gender (m,f,t)");
var dept = prompt("Enter department");
var age = parseInt(prompt("Enter age"));
var basicsal = parseInt(prompt("Enter your salary"));

var tax;
var pf = (12 / 100) * basicsal;
var hra = (24 / 100) * basicsal;
var totalSal = pf + hra + basicsal;

console.log("Employee name is " + empName);
console.log("Employee gender is " + gender);
console.log("Employee age is " + age);
console.log("Employee depatment is " + dept);
console.log("Employee basicsal is " + basicsal);
console.log("Employee pf is " + pf);
console.log("Employee hra is " + hra);
console.log("Employee total salary  before tax is " + totalSal);

if (gender == "male" || gender == "Male" || gender == "m" || gender == "M") {
  if (totalSal >= 300000) {
    tax = (15 / 100) * totalSal;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  } else if (totalSal >= 200000) {
    tax = (10 / 100) * totalSal;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  } else if (totalSal >= 100000) {
    tax = (5 / 100) * totalSal;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  } else {
    tax = 0;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  }
} else if (
  gender == "female" ||
  gender == "Female" ||
  gender == "f" ||
  gender == "F"
) {
  if (totalSal >= 300000) {
    tax = (10 / 100) * totalSal;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  } else if (totalSal >= 200000) {
    tax = (5 / 100) * totalSal;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  } else {
    tax = 0;
    console.log("Tax paid is " + tax);
    totalSal = totalSal - tax;
    console.log("Total salary after tax is " + totalSal);
  }
} else {
  console.log("No tax to be paid");
}
