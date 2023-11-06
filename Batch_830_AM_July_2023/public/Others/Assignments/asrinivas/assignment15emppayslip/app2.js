var employeeinfo = {};
var empdetails = () => {
    employeeinfo.name = document.querySelector("#name").value;
    employeeinfo.age = document.querySelector("#age").value;
    employeeinfo.gender = document.querySelector("input[name = gender]:checked").value;
    employeeinfo.salary = document.querySelector("#salary").value;
    employeeinfo.salary = parseInt(employeeinfo.salary);
    employeeinfo.department = document.querySelector("#department").value


    employeeinfo.pf = employeeinfo.salary * 12 / 100;
    employeeinfo.hra = employeeinfo.salary * 24 / 100;
    employeeinfo.totalsalary = employeeinfo.salary + employeeinfo.pf + employeeinfo.hra;

    empdispaly();
}
var emptax = ()=> {
    if (employeeinfo.salary > 30000)
    {
        employeeinfo.tax = employeeinfo.salary * 10 /100;

    }
    else
    {
        employeeinfo.tax = 0;
    }
}
var empdispaly = () => {
    
    emptax();
     document.querySelector("#dname").innerHTML = employeeinfo.name;
    document.querySelector("#dage").innerHTML = employeeinfo.age;
    document.querySelector("#dgender").innerHTML =  employeeinfo.gender;
    document.querySelector("#ddepartment").innerHTML =employeeinfo.department;
    document.querySelector("#dsal").innerHTML = employeeinfo.salary;
    document.querySelector("#dpf").innerHTML = employeeinfo.pf;
    document.querySelector("#dhra").innerHTML = employeeinfo.hra;
    document.querySelector("#dtotalsal").innerHTML = employeeinfo.totalsalary;
    document.querySelector("#dtax").innerHTML = employeeinfo.tax;
    document.querySelector(".hide").style.display = 'block';
}