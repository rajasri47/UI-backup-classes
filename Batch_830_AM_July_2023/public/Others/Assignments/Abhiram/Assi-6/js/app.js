// accessing data elements
const form = document.querySelector("form");
const empName = document.getElementById("empName");
const empAge = document.getElementById("empAge");
const empGender = document.getElementById("empGender");
const empSalary = document.getElementById("empSalary");


// stop the form refreshing
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData();
});

// display the user Details
function getData() {
    // accessing the data elements values
    let empNameValue = empName.value;
    let empAgeValue = empAge.value;
    let empGenderValue = empGender.value;
    let empSalaryValue = empSalary.value;

    // Employee value change from string to number 
    parseInt(empSalaryValue);


    // calculate for PF and HRA  
    const empPF = (12 / empSalaryValue) * 100;
    const empHRF = (24 * empSalaryValue) * 100;
    const total = empPF + empHRF;

    // print the user data 
    console.log("employeeName :" + empNameValue);
    console.log("EmployeeAge :" + empAgeValue);
    console.log("EmployeeGender :" + empGenderValue);
    console.log("EmployeeloyeSalary:" + empSalaryValue);
    console.log("EmployeePF :" + empPF);
    console.log("EmployeeHRF :" + empHRF);

    // total  employee salary
    console.log("Employee total salary before tax is :" + total);
}

// clear function
function clear(){
    console.clear();
}