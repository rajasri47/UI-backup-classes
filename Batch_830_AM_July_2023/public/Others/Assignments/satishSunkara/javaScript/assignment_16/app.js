var empInfo = {} ;
var empData = () => {
    empInfo.name = document.querySelector("#name").value;
    empInfo.age = document.querySelector("#age").value;
    empInfo.location = document.querySelector("#location").value;
    empInfo.gender = document.querySelector("input[name = gender]:checked").value;
    empInfo.department = document.querySelector("#department").value;
    empInfo.salary = document.querySelector("#salary").value;
    empInfo.salary = parseInt(empInfo.salary);

    empInfo.pf = empInfo.salary * 12 /100 ;
    empInfo.hra = empInfo.salary * 24 /100 ;
    empInfo.totalSalary = empInfo.salary + empInfo.pf + empInfo.hra;

    empDisplay();
}
var emptax = () => {
    if (empInfo.salary >30000){
        empInfo.tax = empInfo.totalSalary * 10 / 100;
    }else{
        empInfo.tax= 0; 
    }
}
var empDisplay = () => {
    emptax();
    document.querySelector("#empName").innerHTML = empInfo.name;
    document.querySelector("#empAge").innerHTML = empInfo.age;
    document.querySelector("#empLocn").innerHTML = empInfo.location;
    document.querySelector("#empGen").innerHTML = empInfo.gender;
    document.querySelector("#empDep").innerHTML = empInfo.department;

    document.querySelector("#empSal").innerHTML = empInfo.salary;
    document.querySelector("#empPf").innerHTML = empInfo.pf;
    document.querySelector("#empHra").innerHTML = empInfo.hra;
    document.querySelector("#empTotalSal").innerHTML = empInfo.totalSalary;
    document.querySelector("#empTax").innerHTML = empInfo.tax;

    document.querySelector(".hider").style.display = 'block'

}