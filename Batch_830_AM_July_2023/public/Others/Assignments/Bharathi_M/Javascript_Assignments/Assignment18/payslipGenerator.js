var generatePayslip = () => {

    document.querySelector(".resultContainer").style.display = 'block';

    var empDetails = {

        readEmpData() {
            this.empName = document.querySelector("#eName").value;
            this.empAge = document.querySelector("#eAge").value;
            this.empGender = document.querySelector("input[name=gender]:checked").value;
            this.empGender = this.empGender.toLowerCase();
            this.department = document.querySelector("#eDept").value;
            this.basicSalary = parseInt(document.querySelector("#ebSal").value);
            this.empTotalSalary();
        },

        empTotalSalary() {
            this.HRA = (this.basicSalary * 24) / 100;
            this.PF = (this.basicSalary * 12) / 100;
            this.totalSalary = this.basicSalary + this.HRA + this.PF;
            this.showEmpData();
        },
        showEmpData() {
            document.querySelector("#name").innerText = this.empName;
            document.querySelector("#age").innerText = this.empAge;
            document.querySelector("#gender").innerText = this.empGender;
            document.querySelector("#dept").innerText = this.department;
            document.querySelector("#bSal").innerText = this.basicSalary;
            document.querySelector("#pf").innerText = this.PF;
            document.querySelector("#hra").innerText = this.HRA;
            document.querySelector("#totalSal").innerText = this.totalSalary;
        }
    };
empDetails.readEmpData();
}