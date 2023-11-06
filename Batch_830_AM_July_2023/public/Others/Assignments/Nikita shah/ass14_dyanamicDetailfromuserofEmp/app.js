var EmployeeInfo={};
var readEmpDetails = () => {
    console.log(document.querySelector("#empName"))
    EmployeeInfo.name = document.querySelector("#empName").value;
    EmployeeInfo.age = document.querySelector("#eage").value;
    EmployeeInfo.gender = document.querySelector("input[name=egender]:checked").value;
    EmployeeInfo.department = document.querySelector("#eDepartment").value;
    EmployeeInfo.income = [];
    for(var i= 1; i<=3; i++){
        var id= '#inc'+ i;
        var idvalue = document.querySelector(id).value;
        idvalue = parseInt(idvalue);
        EmployeeInfo.income.push(idvalue);
    }
    EmployeeInfo.languagesknown = [];

    var checkboxlist = document.querySelectorAll("input[type=checkbox]:checked");
    for(var i = 0; i < checkboxlist.length; i++){
        EmployeeInfo.languagesknown.push(checkboxlist[i].value);
    }
     displayEmpData();
}
var getTotalandAvg = () => {
    EmployeeInfo.total=0;
    for(var i= 0; i < EmployeeInfo.income.length; i++){
        EmployeeInfo.total+=EmployeeInfo.income[i];
    }
    EmployeeInfo.avg = EmployeeInfo.total/EmployeeInfo.income.length;
}

var getPost = () => {
    EmployeeInfo.post = '';
    if(EmployeeInfo.avg > 300000){
        EmployeeInfo.post = 'Senior'
    }else {
        EmployeeInfo.post = 'Junior'
    }
}
var displayEmpData = () => {
    getTotalandAvg();
    getPost();
    
    document.querySelector("#dename").innerHTML = EmployeeInfo.name;
    document.querySelector("#dage").innerHTML = EmployeeInfo.age;
    document.querySelector("#dgender").innerHTML = EmployeeInfo.gender;
    document.querySelector("#ddepartment").innerHTML = EmployeeInfo.department;
    document.querySelector("#davg").innerHTML = EmployeeInfo.avg;
    document.querySelector("#dtotal").innerHTML = EmployeeInfo.total;
    document.querySelector("#dlang").innerHTML = EmployeeInfo.languagesknown.join(" - ");
    document.querySelector("#dpost").innerHTML = EmployeeInfo.post;
    
}