
import {getEmpTotalTax, count} from './lib/salUtil.js';

// import * as abc from './lib/salUtil.js'


import govTaxRules from './lib/salUtil.js';

var empData = {};

var readEmpData = () => {
    empData.name = document.querySelector("#empname").value;
    empData.basicSal = document.querySelector("#empbsal").value;
    empData.basicSal = parseInt(empData.basicSal);
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.totalSal = getTtoalSal(empData.basicSal);
    getTotalTax(empData.basicSal, empData.gender);
}

var getTtoalSal = (basicSal) => {
    var pf = (14 * basicSal) / 100;
    var hra = (24 * basicSal) / 100;
    var totalsal = basicSal + pf + hra;
    return totalsal;
}

var getTotalTax = (totalSal, gender) => {
    var totalTax = abc.getEmpTotalTax(gender, totalSal);
    document.querySelector("#taxblock").innerHTML = totalTax;
}

document.querySelector("#payslipBtn").addEventListener("click", () => {
   //  readEmpData();

    // console.log(":count value is " + abc.count)

    console.log(govTaxRules)
})



