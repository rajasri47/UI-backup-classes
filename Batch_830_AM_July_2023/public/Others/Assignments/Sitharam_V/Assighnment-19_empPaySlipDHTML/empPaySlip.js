var empData = {};

var readData = () => {
    empData.name = document.querySelector("#ename").value;
    empData.age = document.querySelector("#eage").value;
    empData.gender = document.querySelector("input[type=radio]:checked").value;
    empData.id = document.querySelector("#id").value;
    empData.eMail = document.querySelector("#email").value;
    empData.jobTitle = document.querySelector("#jobTitle").value;
    empData.basicSal = parseInt(document.querySelector("#bsal").value);
    totalSalary();
    Tax();
    display();
}

var totalSalary = () => {
    empData.pf = (empData.basicSal * 12) / 100;
    empData.hra = (empData.basicSal * 24) / 100;
    empData.totalSal = empData.pf + empData.hra + empData.basicSal;
}

var Tax = () => {
    switch(empData.gender) {
        case "male" :
            if (empData.basicSal > 300000) {
                empData.tax = ( empData.totalSal * 15) / 100;
            }
            else if (empData.basicSal > 200000) {
                empData.tax = ( empData.totalSal * 10) / 100;
            }
            else if ( empData.basicSal > 100000) {
                empData.tax = ( empData.totalSal * 5) / 100;
            }
        
        case "female" : 
            if (empData.basicSal > 300000) {
                empData.tax = ( empData.totalSal * 10) / 100;
            }
            else if (empData.basicSal > 200000) {
                empData.tax = ( empData.totalSal * 5) / 100;
            }

        case "others" :
            if (empData.basicSal > 300000) {
                empData.tax = ( empData.totalSal * 10) / 100;
            }
            else if (empData.basicSal > 200000) {
                empData.tax = ( empData.totalSal * 5) / 100;
            }
    }
}

var display = () => {

    window.open("file:///C:/SITHARAM/webServer/public/Assighnment-19_empPaySlipDHTML/empPaySlipDisply.html?sname=" 
            + empData.name + "&sid=" + empData.id + "&sjobTitle=" + empData.jobTitle + "&sbasicSal=" + empData.basicSal 
            + "&spf=" + empData.pf + "&shra=" + empData.hra + "&stotalSal=" + empData.totalSal + "&stax=" + empData.tax);

    /*document.querySelector("#dname").innerHTML = empData.name;
    document.querySelector("#dId").innerHTML = empData.id;
    document.querySelector("#dJobTitle").innerHTML = empData.jobTitle;
    document.querySelector("#dbasicSal").innerHTML = empData.basicSal;
    document.querySelector("#dpf").innerHTML = empData.pf;
    document.querySelector("#dhra").innerHTML = empData.hra;
    document.querySelector("#dtotalSal").innerHTML = empData.totalSal;
    document.querySelector("#dtax").innerHTML = empData.tax;    */

}


