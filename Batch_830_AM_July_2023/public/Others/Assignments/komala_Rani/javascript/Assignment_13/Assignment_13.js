(function() {
    var empname, empage, gender, dept, basicsal, pf, hra, totalsal;
    function employeeInfo() {
        empname = prompt("Enter empName");
        empage = parseInt(prompt("Enter empAge"));
        gender = prompt("enter empGender ");
        dept = prompt("Enter empdept");
        basicsal = parseInt(prompt("Enter empBasic salary"));


    }
    function empdetails(){
        employeeInfo();
        salarydetails();
        console.log("Enter EmpolyeeName: " + empname);
        console.log("Enter EmpolyeeAge: " + empage);
        console.log("Enter EmpolyeeGender: " + gender);
        console.log("Enter EmpolyeeDept: " + dept);
        console.log("Enter Employeesalary: " + basicsal);
        console.log("Enter Employee pf is: " + pf);
        console.log("Enter Employee hra is: " + hra);
        console.log("Enter Totalsalary is: " + totalsal);
        GenderTaxdetails();
    }
    function salarydetails() {
        pf = (12 / 100) * basicsal;
        hra = (24 / 100) * basicsal;
        totalsal = pf + hra + basicsal;

    }

    function GenderTaxdetails() {
        var tax;
        if(gender == "male" || gender == "Male") {
            if(totalsal >= 300000) {
                tax = (15 / 100) * totalsal;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            } else if(totalsal >= 200000) {
                tax = (10 / 100) * totalsal;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            } else if(totalsal >= 100000) {
                tax = (5 / 100) * totalsal;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            } else{
                tax = 0;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            }
        }else if(gender == "female" || gender == "Female") {
            if(totalsal >= 300000) {
                tax = (10 / 100) * totalsal;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            } else if(totalsal >= 200000) {
                tax = (5 / 100) * totalsal;
                console.log("tax paid is " + tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            } else{
                tax = 0;
                console.log("tax paid is "+ tax);
                totalsal = totalsal - tax;
                console.log("after paid tax totalsal is " + totalsal);
            }
        } else{
            console.log("Zero tax");
        }        
    }
    empdetails();
})();