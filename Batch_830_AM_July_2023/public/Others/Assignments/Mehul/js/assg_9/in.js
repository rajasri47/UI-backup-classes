var empDetails = {
  empName: prompt("Enter the name"),
  gender: prompt("Enter gender (m,f,t)"),
  dept: prompt("Enter department"),
  age: parseInt(prompt("Enter age")),
  basicsal: parseInt(prompt("Enter your salary")),

  calSal() {
    pf = (12 / 100) * this.basicsal;
    hra = (24 / 100) * this.basicsal;
    totalSal = pf + hra + this.basicsal;
  },

  displayData() {
    this.calSal();
    console.log("Employee name is " + this.empName);
    console.log("Employee gender is " + this.gender);
    console.log("Employee age is " + this.age);
    console.log("Employee depatment is " + this.dept);
    console.log("Employee basicsal is " + this.basicsal);
    console.log("Employee pf is " + pf);
    console.log("Employee hra is " + hra);
    console.log("Employee total salary  before tax is " + totalSal);
    this.genderRead();
  },

  genderRead() {
    if (
      this.gender == "male" ||
      this.gender == "Male" ||
      this.gender == "m" ||
      this.gender == "M"
    ) {
      if (totalSal >= 300000) {
        tax = (15 / 100) * totalSal;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      } else if (totalSal >= 200000) {
        tax = (10 / 100) * totalSal;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      } else if (totalSal >= 100000) {
        tax = (5 / 100) * totalSal;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      } else {
        tax = 0;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      }
    } else if (
      this.gender == "female" ||
      this.gender == "Female" ||
      this.gender == "f" ||
      this.gender == "F"
    ) {
      if (totalSal >= 300000) {
        tax = (10 / 100) * totalSal;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      } else if (totalSal >= 200000) {
        tax = (5 / 100) * totalSal;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      } else {
        tax = 0;
        console.log("Tax paid is " + tax);
        totalSal = totalSal - tax;
        console.log("Total salary after tax is " + totalSal);
      }
    } else {
      console.log("No tax");
    }
  },
};

empDetails.displayData();
