var emppayslip = {}
var readempdetails = () => {
emppayslip.fname = document.querySelector("#fname").value;
emppayslip.lname = document.querySelector("#lname").value;
emppayslip.age = document.querySelector("#age").value;
emppayslip.gender = document.querySelector("input[name=gender]:checked").value;
emppayslip.dept = document.querySelector("#department").value;
emppayslip.salary = document.querySelector("#salary").value;
emppayslip.salary = parseInt(emppayslip.salary);
emppayslip.pf = (emppayslip.salary * 12) / 100;
emppayslip.hra = (emppayslip.salary * 24) / 100;
emppayslip.total = emppayslip.salary + emppayslip.pf + emppayslip.hra;

display();
}

var display = () => {
    document.querySelector("#Fname").innerHTML = emppayslip.fname;
    document.querySelector("#Lname").innerHTML = emppayslip.lname;
    document.querySelector("#Age").innerHTML = emppayslip.age;
    document.querySelector("#gender").innerHTML = emppayslip.gender;
    document.querySelector("#dept").innerHTML = emppayslip.dept;
    document.querySelector("#bsalary").innerHTML = emppayslip.salary;
    document.querySelector("#pf").innerHTML = emppayslip.pf;
    document.querySelector("#hra").innerHTML = emppayslip.hra;
    document.querySelector("#total").innerHTML = emppayslip.total;

}