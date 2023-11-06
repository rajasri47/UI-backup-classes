var employeeInfo = {};
var readEmpDetails = () => {
    employeeInfo.empName = document.querySelector("#ename").value;
    employeeInfo.empAge = document.querySelector("#eage").value;
    employeeInfo.empGender = document.querySelector("input[name=gender]:checked").value;
    employeeInfo.empGender = employeeInfo.empGender.toLowerCase();
    employeeInfo.department = document.querySelector("#eDept").value;
    employeeInfo.basicSalary = parseInt(document.querySelector("#esal").value);
    empTotalSalary();
}
var empTotalSalary = () => {
    console.log("empTotal Salary")
    employeeInfo.HRA = (employeeInfo.basicSalary * 24) / 100;
    employeeInfo.PF = (employeeInfo.basicSalary * 14) / 100;
    employeeInfo.totalSalary = employeeInfo.basicSalary + employeeInfo.HRA + employeeInfo.PF;
    taxDetails();
};
var taxDetails = () => {
    var taxPercent = 0;

    if (employeeInfo.empGender === "male") {
        if (employeeInfo.totalSalary > 500000) {
            employeeInfo.taxPercent = 15;
        }

        else if (employeeInfo.totalSalary >= 300000 && employeeInfo.totalSalary < 500000) {
            employeeInfo.taxPercent = 10;
        }

        else if (employeeInfo.totalSalary >= 200000 && employeeInfo.totalSalary < 300000) {
            employeeInfo.taxPercent = 5;
        }

        else {
            employeeInfo.taxPercent = 0;
        }
    }
    else {

        //For Female
        if (employeeInfo.totalSalary > 500000) {
            employeeInfo.taxPercent = 10;
        }

        else if (employeeInfo.totalSalary >= 300000 && employeeInfo.totalSalary < 500000) {
            employeeInfo.taxPercent = 5;

        }

        else {
            employeeInfo.taxPercent = 0;
        }
    }

    employeeInfo.totalTax = (employeeInfo.totalSalary * employeeInfo.taxPercent) / 100;
    employeeInfo.salaryAfterTax = employeeInfo.totalSalary - employeeInfo.totalTax;
    employeeInfo.totalTax = parseInt(employeeInfo.totalTax);
    employeeInfo.salaryAfterTax = parseInt(employeeInfo.salaryAfterTax);
    employeeInfo.PF = parseInt(employeeInfo.PF);
    employeeInfo.HRA = parseInt(employeeInfo.HRA);
    showEmpData();

};
var showEmpData = () => {
    
    employeeInfo.empGender = employeeInfo.empGender.charAt(0).toUpperCase() + employeeInfo.empGender.slice(1);
    document.querySelector("#rName").innerText = employeeInfo.empName;
    document.querySelector("#rAge").innerText = employeeInfo.empAge;
    document.querySelector("#rGender").innerText = employeeInfo.empGender;
    document.querySelector("#rDept").innerText = employeeInfo.department;
    document.querySelector("#rBasicSal").innerText = employeeInfo.basicSalary;
    document.querySelector("#rPF").innerText = employeeInfo.PF;
    document.querySelector("#rHRA").innerText = employeeInfo.HRA;
    document.querySelector("#rTotalTax").innerText = employeeInfo.totalTax;
    document.querySelector("#rTaxSlab").innerText = employeeInfo.taxPercent;
    document.querySelector("#rSalAftTax").innerText = employeeInfo.salaryAfterTax;
    document.querySelector(".resultContainer").style.display = 'block';
}

var clearFields = () => {
    document.querySelector("#ename").value = ""
    document.getElementById("eage").value = ""
    document.querySelector("input[name=gender]:checked").checked = true;
    document.querySelector("#eDept").value = "HR";
    document.querySelector("#esal").value = "";
    document.querySelector(".resultContainer").style.display = 'none';
}