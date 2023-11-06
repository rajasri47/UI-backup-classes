<<<<<<< HEAD
employeeDetails = {
    empName: prompt(" enter your name "),
    empAge: parseInt(prompt(" enter your age ")),
    empGender: prompt(" enter gender "),
    empDepartment: prompt(" enter department "),
    basicSalary: parseInt(prompt(" enter your basic Salary ")),

    taxCalc() {
        pf = (12/100)*this.basicSalary;
        hra = (24/100)*this.basicSalary;
        totalSalary= pf + hra + this.basicSalary;
    },

    taxDetails(){
        if(this.empGender == 'male' || this.empGender == 'Male'){
            if(totalSalary >= 300000){
                tax = (15/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
            }else if(totalSalary >= 200000){
                tax = (10/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total salary after tax is " +totalSalary);
            }else if(totalSalary >= 100000){
                tax = (5/100)*totalSalary;
                console.log(" tax is  " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
            }
        }else if(this.empgender == 'male' || this.empgender == 'Male'){
              if(totalSalary>= 300000){
                tax = (10/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
              }else if(totalSalary >= 200000){
                tax = (5/100)*basicSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total salary after tax is " +totalSalary);
              }else{
                tax = 0;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
              }
        }else{
            console.log(" no tax ");
        }
    },

        displayemployeeDetails(){
        this.taxCalc();
        console.log(" employee name is " +this.empName);
        console.log(" gender is " +this.empGender);
        console.log(" age is " +this.empAge);
        console.log(" department is " +this.empDepartment);
        console.log(" basic Salary is  " +this.basicSalary);
        console.log(" pf is " +pf);
        console.log(" hra is " +hra);
        console.log(" total Salary before tax is " +totalSalary);
        this.taxDetails();


    },
};

employeeDetails.displayemployeeDetails();


=======
employeeDetails = {
    empName: prompt(" enter your name "),
    empAge: parseInt(prompt(" enter your age ")),
    empGender: prompt(" enter gender "),
    empDepartment: prompt(" enter department "),
    basicSalary: parseInt(prompt(" enter your basic Salary ")),

    taxCalc() {
        pf = (12/100)*this.basicSalary;
        hra = (24/100)*this.basicSalary;
        totalSalary= pf + hra + this.basicSalary;
    },

    taxDetails(){
        if(this.empGender == 'male' || this.empGender == 'Male'){
            if(totalSalary >= 300000){
                tax = (15/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
            }else if(totalSalary >= 200000){
                tax = (10/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total salary after tax is " +totalSalary);
            }else if(totalSalary >= 100000){
                tax = (5/100)*totalSalary;
                console.log(" tax is  " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
            }
        }else if(this.empgender == 'male' || this.empgender == 'Male'){
              if(totalSalary>= 300000){
                tax = (10/100)*totalSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
              }else if(totalSalary >= 200000){
                tax = (5/100)*basicSalary;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total salary after tax is " +totalSalary);
              }else{
                tax = 0;
                console.log(" tax is " +tax);
                totalSalary = totalSalary - tax;
                console.log(" total Salary after tax is " +totalSalary);
              }
        }else{
            console.log(" no tax ");
        }
    },

        displayemployeeDetails(){
        this.taxCalc();
        console.log(" employee name is " +this.empName);
        console.log(" gender is " +this.empGender);
        console.log(" age is " +this.empAge);
        console.log(" department is " +this.empDepartment);
        console.log(" basic Salary is  " +this.basicSalary);
        console.log(" pf is " +pf);
        console.log(" hra is " +hra);
        console.log(" total Salary before tax is " +totalSalary);
        this.taxDetails();


    },
};

employeeDetails.displayemployeeDetails();


>>>>>>> 042d7d5cee4226d7ffbfda79e4e2e46212cb892e
