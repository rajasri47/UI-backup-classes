var employeelInfo = {};
readStudentData =() =>{
    
    console.log(document.querySelector("#empName"))
    employeelInfo.name = document.querySelector("#empName").value;
    employeelInfo.age = document.querySelector("#eAge").value;
    employeelInfo.gender = document.querySelector("input[name=gender]:checked").value; 
    employeelInfo.dept = document.querySelector("#EmpDept").value;
    employeelInfo.bsal = document.querySelector("#EmpBsal").value;
    displayStudentDetails();
}
var displayStudentDetails = () => {
    getTotalSale();
    // getGrade();
    document.querySelector("#esname").innerHTML = employeelInfo.name;
    document.querySelector("#eage").innerHTML = employeelInfo.age;
    document.querySelector("#egender").innerHTML = employeelInfo.gender;
    document.querySelector("#edept").innerHTML = employeelInfo.dept;
    document.querySelector("#ebsal").innerHTML = employeelInfo.bsal;
    document.querySelector("#ePF").innerHTML = employeelInfo.pf;
    document.querySelector("#eHRA").innerHTML = employeelInfo.hra;
    document.querySelector("#eTotal").innerHTML = employeelInfo.tsal;
    // document.querySelector("#dlangues").innerHTML = studentInfo.languagesKnown.join(" - ");

   
}
var getTotalSale = () => {
    employeelInfo.pf = (employeelInfo.bsal*12)/100;
    employeelInfo.hra = (employeelInfo.bsal*50)/100;
    employeelInfo.tsal = parseInt(employeelInfo.bsal) + employeelInfo.hra - employeelInfo.pf;
}