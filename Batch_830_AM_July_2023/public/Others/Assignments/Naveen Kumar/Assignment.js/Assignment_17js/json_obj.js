var empDetails = {
  empname: prompt("enter empname"),
  empage: parseInt(prompt("enter empage")),
  empgender: prompt("enter empgender"),
  empdept: prompt("enter empdept"),
  basicsal: parseInt(prompt("Enter basic salary")),

  displayempdetails() {
    this.getTotalSal();
    console.log("Emp name is " + this.empname);
    console.log("Emp gender is " + this.empgender);
    console.log("Emp age is " + this.empage);
    console.log("Emp dept is " + this.empdept);
    console.log("Emp basicsal is " + this.basicsal);
    console.log("Emp hra is " + hra);
    console.log("Emp pf is " + pf);
    console.log("Emp total salary before tax is " + totalsal);
    this.getGenderTaxdetails();
  },

  getTotalSal() {
    pf = (12 / 100) * this.basicsal;
    hra = (24 / 100) * this.basicsal;
    totalsal = pf + hra + this.basicsal;
  },

  getGenderTaxdetails() {
    if (this.empgender == "male" || this.empgender == "Male") {
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
    } else if (this.empgender == "female" || this.empgender == "Female") {
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
  },
};
empDetails.displayempdetails();
