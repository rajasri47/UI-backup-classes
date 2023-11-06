import { getEmpTotalTax } from "./salutil.js";
var empdata = {};

var readUserData = () => {
    empdata.Name = document.querySelector("#empname").value;
    empdata.basicSal = document.querySelector("#basicsal").value;
    empdata.basicSal = parseInt(empdata.basicSal);
    empdata.gender = document.querySelector("input[name=gender]:checked").value;
    empdata.totalSal = getTotalandAvg(empdata.basicSal);
    console.log(empdata);
    getTotalTax(empdata.basicSal, empdata.gender);
};

var getTotalandAvg = (basicSal) => {
    var pf = (14 * basicSal) / 100;
    var hra = (24 * basicSal) / 100;
    var totalSal = pf + hra + basicSal;
    return totalSal;

};

var getTotalTax = (totalSal, gender) => {
    var  totalTax = getEmpTotalTax(gender, totalSal);
    document.querySelector("#taxblock").innerHTML = totalTax;

};

document.querySelector('#paySlipBtn').addEventListener("click", () => {
    readUserData();
    
});