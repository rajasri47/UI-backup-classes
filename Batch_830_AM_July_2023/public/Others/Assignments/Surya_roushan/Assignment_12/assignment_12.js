var employee, age, gender, department, basicSalary, hra, pf, tax, totalSalary;

function readUserData(){

 employee = prompt("Enter Employee Name ");
 age = parseInt(prompt("Enter Age "));
 gender = prompt("Enter Gender ");
 department = prompt("Enter Department ");
 basicSalary = parseInt(prompt("Basic Salary is "));
 
}

function salaryDetails(){
    pf = (12/100)*basicSalary;
    hra = (24/100)*basicSalary;
    totalSalary = basicSalary + hra + pf;
}

function taxDetails(){
    if(gender == "male" || gender == "Male" ){
        if(totalSalary>=300000){
            tax = (15/100)*totalSalary;
            console.log("Tax is " +tax);
            totalSalary = totalSalary - tax;
            console.log("Total After Tax is " +totalSalary);
        }else if(totalSalary>=200000){
            tax = (10/100)*totalSalary;
            console.log("Tax is " +tax);
            totalSalary = totalSalary - tax;
            console.log("Total Salary After Tax is " +totalSalary);

        }else if(totalSalary >= 100000){
            tax = (5/100)*totalSalary;
            console.log("Tax is " +tax);
            totalSalary = totalSalary - tax;
            console.log("Total Salary After Tax is " +totalSalary);
        }

    } else if (gender == "female" || gender == "Female"){
         if(totalSalary>=300000){
            tax = (10/100)*totalSalary;
            console.log("Tax is " +tax);
            totalSalary = totalSalary - tax;
            console.log("Total Salary After Tax " +totalSalary);
         }else if(totalSalary<=200000){
            tax = (5/100)*totalSalary;
            console.log("Tax is " +tax);
            totalSalary = totalSalary - tax;
            console.log("Total Salary After Tax is " +totalSalary);
         }else {
            tax = 0;
            console.log("Tax is " +tax);
            totalSalary = totalSalary + tax;
            console.log("Total Salary After Tax is " +totalSalary);
         }
    }else {
        console.log("No Tax ")
    }
}

function employeeDetails(){
    readUserData();
    salaryDetails();
    console.log("The Employee is " +employee);
    console.log("Age is " +age);
    console.log("Gender is " +gender);
    console.log("Department is " +department);
    console.log("The Basic Salary is " +basicSalary);
    console.log("The hra is "+hra);
    console.log("The PF is " +pf);
    taxDetails();

}

employeeDetails();