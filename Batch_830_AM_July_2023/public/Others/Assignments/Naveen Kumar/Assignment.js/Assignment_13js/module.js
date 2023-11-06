(function () {
  var empname, empage, empgender, empdept, basicsal, totalsal, hra, pf, tax;

  function readEmpData() {
    empname = prompt("enter empname");
    empage = parseInt(prompt("enter empage"));
    empgender = prompt("enter empgender");
    empdept = prompt("enter empdept");
    basicsal = parseInt(prompt("Enter basic salary"));
  }

  function displayempdetails() {
    readEmpData();
    getTotalSal();
    console.log("Emp name is " + empname);
    console.log("Emp gender is " + empgender);
    console.log("Emp age is " + empage);
    console.log("Emp dept is " + empdept);
    console.log("Emp basicsal is " + basicsal);
    console.log("Emp hra is " + hra);
    console.log("Emp pf is " + pf);
    console.log("Emp total salary before tax is " + totalsal);
    getGenderTaxdetails();
  }

  function getTotalSal() {
    pf = (12 / 100) * basicsal;
    hra = (24 / 100) * basicsal;
    totalsal = pf + hra + basicsal;
  }

  function getGenderTaxdetails() {
    if (empgender == "male" || empgender == "Male") {
      if (totalsal >= 300000) {
        tax = (15 / 100) * totalsal;
        console.log("tax paid is " + tax);
        totalsal = totalsal - tax;
        console.log("total salary after tax is " + totalsal);
      } else if (totalsal >= 200000) {
        tax = (10 / 100) * totalsal;
        console.log("Tax paid is " + tax);
        totalsal = totalsal - tax;
        console.log("Total salary after tax is " + totalsal);
      } else if (totalsal >= 100000) {
        tax = (5 / 100) * totalsal;
        console.log("Tax paid is " + tax);
        totalsal = totalsal - tax;
        console.log("Total salary after tax is " + totalsal);
      } else {
        tax = 0;
        console.log("Tax paid is " + tax);
        totalsal = totalsal - tax;
        console.log("Total salary after tax is " + totalsal);
      }
    } else if (empgender == "female" || empgender == "Female") {
      if (totalsal >= 300000) {
        tax = (10 / 100) * totalsal;
        console.log("tax paid is" + tax);
        totalsal = totalsal - tax;
        console.log("total salary after tax is " + totalsal);
      } else if (totalsal >= 200000) {
        tax = (5 / 100) * totalsal;
        console.log("Tax paid is" + tax);
        totalsal = totalsal - tax;
        console.log("Total salary after tax is " + totalsal);
      } else {
        tax = 0;
        console.log("Tax paid is" + tax);
        totalsal = totalsal - tax;
        console.log("Total salary after tax is " + totalsal);
      }
    } else {
      console.log("Zero tax");
    }
  }

  displayempdetails();
})();
