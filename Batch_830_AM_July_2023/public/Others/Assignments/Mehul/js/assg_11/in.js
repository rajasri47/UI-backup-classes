var empDetails = {};
empInfo = () => {
  empDetails.ename = document.querySelector("#firstusername").value;
  empDetails.eage = document.querySelector("#age").value;
  empDetails.egender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  empDetails.edepart = document.querySelector("#dept").value;
  empDetails.ebasicsala = document.querySelector("#basicsal").value;
  empDetails.ebasicsala = parseInt(empDetails.ebasicsala);
  calculateTax_All();
  displayTotalSal();
};




var calculateTax_All = () => {
  empDetails.pf = parseInt((12 / 100) * empDetails.ebasicsala);
  empDetails.hra = parseInt((24 / 100) * empDetails.ebasicsala);
  empDetails.totalSal = empDetails.ebasicsala + empDetails.pf + empDetails.hra;

  if (empDetails.egender == "Male") {
    if (empDetails.totalSal >= 300000) {
      empDetails.etax = (15 / 100) * empDetails.totalSal;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    } else if (empDetails.totalSal >= 200000) {
      empDetails.etax = (10 / 100) * empDetails.totalSal;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    } else if (empDetails.totalSal >= 100000) {
      empDetails.etax = (5 / 100) * empDetails.totalSal;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    } else {
      empDetails.etax = 0;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    }
  } else if (empDetails.egender == "Female") {
    if (empDetails.totalSal >= 300000) {
      empDetails.etax = (10 / 100) * empDetails.totalSal;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    } else if (empDetails.totalSal >= 200000) {
      empDetails.etax = (5 / 100) * empDetails.totalSal;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    } else {
      empDetails.etax = 0;
      empDetails.tsal1 = empDetails.totalSal - empDetails.etax;
    }
  }
};



var displayTotalSal = () => {
  document.querySelector(".ps").style.display = "block";
  document.querySelector(".psd").style.display = "none";
  document.querySelector("#rname").innerHTML = empDetails.ename;
  document.querySelector("#rage").innerHTML = empDetails.eage;
  document.querySelector("#rgen").innerHTML = empDetails.egender;
  document.querySelector("#rdept").innerHTML = empDetails.edepart;
  document.querySelector("#rbsal").innerHTML = empDetails.ebasicsala;
  document.querySelector("#rpf").innerHTML = empDetails.pf;
  document.querySelector("#rhra").innerHTML = empDetails.hra;
  document.querySelector("#rtsal").innerHTML = empDetails.totalSal;
  document.querySelector("#rtax").innerHTML = empDetails.etax;
  document.querySelector("#rtsal1").innerHTML = empDetails.tsal1;
};
