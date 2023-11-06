var empTemplate = Handlebars.compile(
  document.querySelector("#emp_temp").innerHTML
);

var empList = [
  {
    name: "KEN",
    age: 20,
    gend: "Male",
    dept: "IT",
  },
  {
    name: "NEZUKO",
    age: 22,
    gend: "Female",
    dept: "HR",
  },
  {
    name: "MAKIMA",
    age: 24,
    gend: "Female",
    dept: "Sales",
  },
  {
    name: "YATO",
    age: 22,
    gend: "Male",
    dept: "Marketing",
  },
];

//emp append

var loadEmpDetail = (empData) => {
  var liTg = document.createElement("li");
  liTg.setAttribute("class", "block");
  liTg.innerHTML = empTemplate(empData);
  document.querySelector("#empContainer").append(liTg);
};

//calling

for (var i = 0; i < empList.length; i++) {
  loadEmpDetail(empList[i]);
}
