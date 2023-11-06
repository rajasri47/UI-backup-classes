var empDetails = {};

empDetails.name = prompt("enter empname");
empDetails.age = parseInt(prompt("enter empage"));
empDetails.gender = prompt("enter empgender");
empDetails.dept = prompt("enter empdept");
empDetails.basicsal = parseInt(prompt("Enter basic salary"));
empDetails.pf = (12 / 100) * empDetails.basicsal;
empDetails.hra = (24 / 100) * empDetails.basicsal;
empDetails.totalsal = empDetails.pf + empDetails.hra + empDetails.basicsal;

console.log("Emp name is " + empDetails.name);
console.log("Emp gender is " + empDetails.gender);
console.log("Emp age is " + empDetails.age);
console.log("Emp dept is " + empDetails.dept);
console.log("Emp basicsal is " + empDetails.basicsal);
console.log("Emp hra is " + empDetails.hra);
console.log("Emp pf is " + empDetails.pf);
console.log("Emp total salary before tax is " + empDetails.totalsal);

if (empDetails.gender == "male" || empgender == "Male") {
  if (empDetails.totalsal >= 300000) {
    tax = (15 / 100) * empDetails.totalsal;
    console.log("tax paid is " + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("total salary after tax is " + totalsal);
  } else if (empDetails.totalsal >= 200000) {
    tax = (10 / 100) * empDetails.totalsal;
    console.log("Tax paid is " + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("Total salary after tax is " + totalsal);
  } else if (empDetails.totalsal >= 100000) {
    tax = (5 / 100) * totalsal;
    console.log("Tax paid is " + tax);
    totalsal = totalsal - tax;
    console.log("Total salary after tax is " + totalsal);
  } else {
    tax = 0;
    console.log("Tax paid is " + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("Total salary after tax is " + totalsal);
  }
} else if (empgender == "female" || empgender == "Female") {
  if (empDetails.totalsal >= 300000) {
    tax = (10 / 100) * empDetails.totalsal;
    console.log("tax paid is" + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("total salary after tax is " + totalsal);
  } else if (empDetails.totalsal >= 200000) {
    tax = (5 / 100) * totalsal;
    console.log("Tax paid is" + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("Total salary after tax is " + totalsal);
  } else {
    tax = 0;
    console.log("Tax paid is" + tax);
    empDetails.totalsal = totalsal - tax;
    console.log("Total salary after tax is " + totalsal);
  }
} else {
  console.log("Zero tax");
}
