var empname = prompt("enter empname");
var empage = parseInt(prompt("enter empage"));
var gender = prompt("enter empgender");
var dept = prompt("enter empdept");
var basicsal = parseInt(prompt("empsal"));

var totalsal, hra, pf;

var pf = (12 / 100) * basicsal;
hra = (24 / 100) * basicsal;
totalsal = pf + hra + basicsal;

console.log("Employee name is " + empname);
console.log("Employee gender is " + gender);
console.log("Employee age is " + empage);
console.log("Employee department is " + dept);
console.log("Employee basicsal is " + basicsal);
console.log("Employee pf is " + pf);
console.log("Employee hra is " + hra);
console.log("Employee total salary before tax is " + totalsal);

if (gender == "male" || gender == "Male") {
  if (totalsal >= 300000) {
    tax = (15 / 100) * totalsal;
    console.log("tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("total salary after tax is" + totalsal);
  } else if (totalsal >= 200000) {
    tax = (10 / 100) * totalsal;
    console.log("Tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is" + totalsal);
  } else if (totalsal >= 100000) {
    tax = (5 / 100) * totalsal;
    console.log("Tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is" + totalsal);
  } else {
    tax = 0;
    console.log("Tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is" + totalsal);
  }
} else if (gender == "female" || gender == "Female") {
  if (totalsal >= 300000) {
    tax = (10 / 100) * totalsal;
    console.log("tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("total salary after tax is" + totalsal);
  } else if (totalsal >= 200000) {
    tax = (5 / 100) * totalsal;
    console.log("Tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is" + totalsal);
  } else {
    tax = 0;
    console.log("Tax paid is" + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is" + totalsal);
  }
} else {
  console.log("Zero tax");
}
