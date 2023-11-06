var employeeInfo = {};
var reademployeedata = () =>
{
    employeeInfo.name = document.querySelector("#ename").value;
    employeeInfo.age = document.querySelector("#eage").value;
    employeeInfo.gender = document.querySelector("input[name=gender]:checked").value;
    employeeInfo.country = document.querySelector("#country").value;
    employeeInfo.basicsalary = parseInt(document.querySelector("#ebasicsal").value);
    

   DisplayEmployeeDetails();

}

var getHraAndPf = () => {
    employeeInfo.Hra = (employeeInfo.basicsalary * 24)/100;
    employeeInfo.Hra = parseInt(employeeInfo.Hra);

    employeeInfo.Pf = (employeeInfo.basicsalary * 12)/100;
    employeeInfo.Pf = parseInt(employeeInfo.Pf);
    employeeInfo.TotalSalary = employeeInfo.Hra + employeeInfo.Pf + employeeInfo.basicsalary;
    
}

var Tax = () => {
    if( employeeInfo.gender == 'Male'){
        if(employeeInfo.TotalSalary > 300000){
            employeeInfo.Tax = (employeeInfo.TotalSalary * 30)/100;
        }
        else if (employeeInfo.TotalSalary > 200000){
            employeeInfo.Tax = (employeeInfo.TotalSalary * 20)/100;

        }
        else if (employeeInfo.TotalSalary > 100000){
            employeeInfo.Tax = (employeeInfo.TotalSalary * 10)/100;

    }
    
}
if( employeeInfo.gender == 'Female'){
    if(employeeInfo.TotalSalary > 300000){
        employeeInfo.Tax = (employeeInfo.TotalSalary * 20)/100;
    }
    else if (employeeInfo.TotalSalary > 200000){
        employeeInfo.Tax = (employeeInfo.TotalSalary * 10)/100;

    }
    else if (employeeInfo.TotalSalary > 100000){
        employeeInfo.Tax = (employeeInfo.TotalSalary * 5)/100;

 }
 }
}
  var SalaryAfterTax = () =>{
    employeeInfo.SalaryAfterTax = employeeInfo.TotalSalary - employeeInfo.Tax;
  }

  var DisplayEmployeeDetails = () =>{
    getHraAndPf();
    Tax();
    SalaryAfterTax();
document.querySelector("#sename").innerHTML = employeeInfo.name;
document.querySelector("#seage").innerHTML = employeeInfo.age;
document.querySelector("#segender").innerHTML = employeeInfo.gender;
document.querySelector("#secountry").innerHTML = employeeInfo.country;
document.querySelector("#sebasicsalary").innerHTML = employeeInfo.basicsalary;
document.querySelector("#sehra").innerHTML = employeeInfo.Hra;
document.querySelector("#sepf").innerHTML = employeeInfo.Pf;
document.querySelector("#setotalsalary").innerHTML = employeeInfo.TotalSalary;
document.querySelector("#setax").innerHTML = employeeInfo.Tax;
document.querySelector("#sesalaryaftertax").innerHTML = employeeInfo.SalaryAfterTax;
document.querySelector("#dis").style.display = 'block';
  }