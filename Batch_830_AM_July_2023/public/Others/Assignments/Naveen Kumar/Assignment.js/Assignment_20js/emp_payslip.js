var employeeInfo = {};

var employeedetails = () => {
  employeeInfo.name = document.querySelector("#employeeName").value;

  employeeInfo.age = document.querySelector("#eAge").value;

  employeeInfo.gender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  employeeInfo.department = document.querySelector("#eDepartment").value;

  employeeInfo.employeeid = document.querySelector("#eEmployeeID").value;

  employeeInfo.designation = document.querySelector("#edesignation").value;

  employeeInfo.bankName = document.querySelector("#ebankName").value;

  employeeInfo.accountNumber = document.querySelector("#eAccountNumber").value;

  employeeInfo.BasicSalary = document.querySelector("#eBasicSalary").value;

  displayEmployeeDetails();
};

var displayEmployeeDetails = () => {
  document.querySelector("#display").style.display = "flex";
  document.querySelector(".container").style.display = "none";
  document.querySelector("#dename").innerHTML = employeeInfo.name;
  document.querySelector("#dage").innerHTML = employeeInfo.age;
  document.querySelector("#dgender").innerHTML = employeeInfo.gender;
  document.querySelector("#ddepartment").innerHTML = employeeInfo.department;
  document.querySelector("#dEmployeeID").innerHTML = employeeInfo.employeeid;
  document.querySelector("#ddesignation").innerHTML = employeeInfo.designation;
  document.querySelector("#dbankname").innerHTML = employeeInfo.bankName;
  document.querySelector("#daccountNumber").innerHTML =
    employeeInfo.accountNumber;
  document.querySelector("#dBasicSalary").innerHTML = employeeInfo.BasicSalary;
};
