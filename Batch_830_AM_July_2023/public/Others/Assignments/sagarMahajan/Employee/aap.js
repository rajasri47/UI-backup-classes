const Emp={};

GenEmp=()=>{
    Emp.Name=document.querySelector("#Name").value;
  
    Emp.Age=document.querySelector("#age").value;
    
    Emp.Gender=document.querySelector("input[name=Gender]:checked").value;

    console.log(Emp.Department);

    Emp.Employe_ID=document.querySelector("#Employe_ID").value;

    Emp.Basic_Salary=document.querySelector("#Basic_Salary").value;

    Emp.Ac=document.querySelector("#AC-Nomber").value

     let show= document.querySelector("#display");
     show.style.display="block";  
     let hide=document.querySelector(".detail")
     hide.style.display="none"
    displayStudentDetails();
}
var displayStudentDetails = () => {

    document.querySelector("#dsname").innerHTML = Emp.Name;
    document.querySelector("#dage").innerHTML =  Emp.Age;
    document.querySelector("#eGender").innerHTML=Emp.Gender;
    document.querySelector("#Department").innerHTML=Emp.Department;
    document.querySelector("#EId").innerHTML=Emp.Employe_ID;
    document.querySelector("#basicSal").innerHTML=Emp.Basic_Salary;
    document.querySelector("#Acno").innerHTML=Emp.Ac;



   
}
 
let print = () => {
    window.print();
}