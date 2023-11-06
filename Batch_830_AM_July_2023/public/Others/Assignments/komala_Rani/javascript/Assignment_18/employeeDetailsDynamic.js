var empdetails = {};
var empData = () => {
    empdetails.empname = document.querySelector('#empName').value;
    empdetails.empage = document.querySelector('#empAge').value;
    empdetails.empdept = document.querySelector('#empdept').value;
    empdetails.empgender = document.querySelector("input[name=gender]:checked").value;
    empdetails.Bankoption = document.querySelector('#bankoption').value;
    empdetails.AccountNum = document.querySelector('#accountnumber').value;
    empdetails.empSalary = document.querySelector('#empSalary').value;
    empdetails.empSalary = parseInt(empdetails.empSalary);
    getdisplaydetails();
                
}

var gettotal = () => {
    empdetails.pf = (12 / 100) * empdetails.empSalary;
    empdetails.hra = (24 / 100) * empdetails.empSalary;
    empdetails.totalsal = empdetails.pf + empdetails.hra + empdetails.empSalary;
}

var getdisplaydetails = () => {
    gettotal();
    document.querySelector("#dname").innerHTML = empdetails.empname;
    document.querySelector("#dage").innerHTML = empdetails.empage;
    document.querySelector("#ddept").innerHTML = empdetails.empdept;
    document.querySelector("#dgender").innerHTML = empdetails.empgender;
    document.querySelector("#dbankname").innerHTML = empdetails.Bankoption;
    document.querySelector("#dacnumber").innerHTML = empdetails.AccountNum;
    document.querySelector("#dsalary").innerHTML = empdetails.empSalary;
    document.querySelector("#dpf").innerHTML = empdetails.pf;
    document.querySelector("#dhra").innerHTML = empdetails.hra;
    document.querySelector("#dtotalsal").innerHTML = empdetails.totalsal;

    document.querySelector(".ResultBlock").style.display = "block";
    

}