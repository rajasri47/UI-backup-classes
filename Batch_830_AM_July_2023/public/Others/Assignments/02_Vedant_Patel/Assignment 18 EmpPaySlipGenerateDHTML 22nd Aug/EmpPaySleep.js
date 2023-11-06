var empData = {};
var getPaySlip = () => {
  empData.name = document.querySelector("#empname").value;
  empData.department = document.querySelector("#edep").value;
  empData.location = document.querySelector("#location").value;
  empData.bsalary = document.querySelector("#bsalary").value;
  empData.bsalary = parseInt(empData.bsalary);
  empData.gender = document.querySelector("input[name=gender]:checked").value;
  empData.PF = (empData.bsalary * 12) / 100;
  empData.HRA = (empData.bsalary * 24) / 100;
  empData.NetSalary = empData.bsalary + empData.PF + empData.HRA;
  DisplayEmpData();
};

var DisplayEmpData = () => {
    document.querySelector(".username").innerHTML = empData.name;
    document.querySelector(".department").innerHTML = empData.department;
    document.querySelector(".location").innerHTML = empData.location;
    document.querySelector(".sal").innerHTML = empData.bsalary;
    document.querySelector(".gender").innerHTML = empData.gender;
    document.querySelector(".pf2").innerHTML = empData.PF;
    document.querySelector(".hra1").innerHTML = empData.HRA;
    document.querySelector(".netsalary").innerHTML = empData.NetSalary;
    document.querySelector(".main").style.display = "block";
    document.querySelector(".ul1").style.display = "none";

};

