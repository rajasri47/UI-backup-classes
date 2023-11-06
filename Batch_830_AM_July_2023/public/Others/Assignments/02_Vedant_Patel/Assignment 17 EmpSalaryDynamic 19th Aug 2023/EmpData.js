
var EmpData = {
};
EmpData.Name = prompt("Enter Emp Name", "Vedant")
EmpData.Age = prompt("Enter Emp Age", 25)
EmpData.Gender = prompt("Enter Emp Gender", "Male")
EmpData.Department = prompt("Enter EmpDepartment", "IT")
EmpData.Bsalary = prompt("Enter Emp Bsalary", 25000)
EmpData.Bsalary = parseInt(Bsalary)
EmpData.PF = (Bsalary * 12) / 100
EmpData.HRA = (Bsalary * 24) / 100

var EmpData = {
  Name: "Vedant",
  Age: 28,
  Gender: "Male",
  Department: "IT",
  Bsalary: 25000,
  PF: 3000,
  HRA: 6000,
};

//   div = document.createElement('div');
//   div = innerText = "vedant patel";
//   document.querySelector(".Container").append(div);

var olTag = document.createElement("ol");

var li1 = document.createElement("li");
li1.innerText = "Emp Name : " + EmpData.Name;
olTag.append(li1);

var li2 = document.createElement("li");
li2.innerText = " Name Age: " + EmpData.Age;
olTag.append(li2);

var li3 = document.createElement("li");
li3.innerText = "Emp Gender : " + EmpData.Gender;
olTag.append(li3);

var li4 = document.createElement("li");
li4.innerText = "Emp Department : " + EmpData.Department;
olTag.append(li4);

var li5 = document.createElement("li");
li5.innerText = "Emp Bsalary : " + EmpData.Bsalary;
olTag.append(li5);

var li6 = document.createElement("li");
li6.innerText = "Emp PF : " + EmpData.PF;
olTag.append(li6);

var li7 = document.createElement("li");
li7.innerText = "Emp HRA : " + EmpData.HRA;
olTag.append(li7);

document.querySelector(".container1").append(olTag);
//   document.querySelector(".Container").append(div);



var LoadEmpData = (EmpData) => {
  var litag = document.createElement('li');
  mainlitag.setAttribute("class", "Container");

  var ultag = document.createElement("ul");

var li1 = document.createElement("li");
li1.innerText = 'Empolyee Name :' + EmpData.Name;
oltag.append(li1);

var li2 = document.createElement("li");
li2.innerText = 'Empolyee Age : ' + EmpData.Age;
ultag.append(li2);


  ultag.append(ultag);
document.querySelector(".Container").append(ultag);
  document.querySelector(".Container").append(litag);
}