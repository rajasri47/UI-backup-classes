var EmpData1 = {
  
};
let ReadEmpData = () => {

  EmpData1.Name = prompt("Enter Emp Name", "Vedant");
  EmpData1.Age = prompt("Enter Emp Age", 26);
  EmpData1.Gender = prompt("Enter Emp Gender", "Male");
  EmpData1.Department = prompt("Enter Emp Department","IT");
  EmpData1.Bsalary = prompt("Enter Emp Bsalary",25000);
  EmpData1.Bsalary = parseInt(EmpData1.Bsalary);
}
ReadEmpData();

// var EmpData = {
//   Name: "Vedant",
//   Age: 28,
//   Gender: "Male",
//   Department: "IT",
//   Bsalary: 25000,
//   PF: 3000,
//   HRA: 6000,
// };

//   div = document.createElement('div');
//   div = innerText = "vedant patel";
//   document.querySelector(".Container").append(div);

// var olTag = document.createElement("ol");

// var li1 = document.createElement("li");
// li1.innerText = "Emp Name : " + EmpData.Name;
// olTag.append(li1);

// var li2 = document.createElement("li");
// li2.innerText = " Name Age: " + EmpData.Age;
// olTag.append(li2);

// var li3 = document.createElement("li");
// li3.innerText = "Emp Gender : " + EmpData.Gender;
// olTag.append(li3);

// var li4 = document.createElement("li");
// li4.innerText = "Emp Department : " + EmpData.Department;
// olTag.append(li4);

// var li5 = document.createElement("li");
// li5.innerText = "Emp Bsalary : " + EmpData.Bsalary;
// olTag.append(li5);

// var li6 = document.createElement("li");
// li6.innerText = "Emp PF : " + EmpData.PF;
// olTag.append(li6);

// var li7 = document.createElement("li");
// li7.innerText = "Emp HRA : " + EmpData.HRA;
// olTag.append(li7);
var ol2Tag = document.createElement("ol");

var li11 = document.createElement("li");
li11.innerText = "Emp Name : " + EmpData1.Name;
ol2Tag.append(li11);

var li12 = document.createElement("li");
li12.innerText = " Emp Age: " + EmpData1.Age;
ol2Tag.append(li12);

var li13 = document.createElement("li");
li13.innerText = "Emp Gender : " + EmpData1.Gender;
ol2Tag.append(li13);

var li14 = document.createElement("li");
li14.innerText = "Emp Department : " + EmpData1.Department;
ol2Tag.append(li14);

var li15 = document.createElement("li");
li15.innerText = "Emp Bsalary : " + EmpData1.Bsalary;
ol2Tag.append(li15);

var PF = EmpData1.Bsalary*12/100;
var li16 = document.createElement("li");
li16.innerText = "Emp PF : " + PF;
ol2Tag.append(li16);

var HRA = EmpData1.Bsalary*24/100;
var li17 = document.createElement("li");
li17.innerText = "Emp HRA : " + HRA;
ol2Tag.append(li17);

var Tsalary = EmpData1.Bsalary + PF;
var li16 = document.createElement("li");
li16.innerText = "Total salary of Emp is : " + Tsalary;
ol2Tag.append(li16);

var Asalary = Tsalary*12;
var li17 = document.createElement("li");
li17.innerText = "Annual salary of Emp is : " + Asalary;
ol2Tag.append(li17);

// document.querySelector(".container1").append(olTag);
document.querySelector(".container1").append(ol2Tag);
//   document.querySelector(".Container").append(div);
