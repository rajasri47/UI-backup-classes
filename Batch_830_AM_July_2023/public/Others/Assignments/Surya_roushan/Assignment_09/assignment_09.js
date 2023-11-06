var employee = prompt("Enter Employee Name ");
var gender = prompt("Enter Gender ");
var age = parseInt(prompt("Enter Your Age "));
var department = prompt("Enter Your Department ");
var basicSalary = parseInt(prompt("Enter Your Basic Salary "));

var tax;
var hra = (24/100)*basicSalary;
var pf = (12/100)*basicSalary;
var totalSalary = basicSalary + hra + pf;

console.log("Employee Name is " + employee);
console.log("Gender is " + gender);
console.log("Age is" + age);
console.log("Department is " + department);
console.log("basicSalary ia " + basicSalary);
console.log("HRA is " + hra);
console.log("PF is " + pf);
console.log("Total Salary Before " + totalSalary);

if(gender == "male" || gender == "Male"){
    if (totalSalary >= 300000){
        tax = (15/100)*basicSalary;
        console.log("tax is " + tax);
        totalSalary = totalSalary - tax;
        console.log("Total Salary After Tax is " + totalSalary);
    }else if (totalSalary >= 200000){
      tax = (10/100)*totalSalary;
      console.log("Tax is " + tax);
      totalSalary = totalSalary - tax;
      console.log("Total Salary After Tax is " + totalSalary);
    } else if (totalSalary >= 100000){
        tax = (5/100)*totalSalary;
        console.log("Tax is " + tax);
        totalSalary = totalSalary - tax;
        console.log("Total Salary is" + totalSalary);
    }
}else{
    tax = 0;
    console.log("Tax is " + tax);
    totalSalary = totalSalary - tax;
    console.log("Total Salary After Tax is");
} if (gender == "female" || gender == "Female"){
    if(totalSalary >= 300000){
     tax = (10/100)*totalSalary;
     console.log("Tax is " + tax);
     totalSalary = totalSalary - tax;
     console.log("Total Salary After tax is " + totalSalary);
    }else if(totalSalary >= 200000){
     tax = (5/100)*totalSalary;
     console.log("Tax is " + tax);
     totalSalary = totalSalary - tax;
     console.log("Total Salary After Tax is " + totalSalary);

    }else {
        tax = 0;
        console.log("Tax is " + tax);
        totalSalary = totalSalary - tax;
        console.log("Total Salary After Tax is " +totalSalary);
    }
}else{
    tax = 0;
}
