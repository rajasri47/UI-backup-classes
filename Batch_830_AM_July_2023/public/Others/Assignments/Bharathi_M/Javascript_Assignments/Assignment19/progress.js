var validateName = (event) =>{
    console.log(event)
    var studentName = document.querySelector("#studentName").value;
    console.log(studentName);
    if(event.keyCode >= 65 && event.keyCode<=90){
        return true;
    }else if(event.keyCode >= 97 && event.keyCode <= 122){
        return true;
    }
    else if(event.keyCode == 32){
        return true;
    }
    else{
        return false;
    }
}

var validateNumber = (event) =>{
    console.log(event)
    var marksNumber = document.querySelector("#m1").value;
    console.log(marksNumber);
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    }
 else {
    return false;
}
}


var studentInfo = {};
var readStudentData = () => {
    
    
    console.log(document.querySelector("#studentName"))
    studentInfo.name = document.querySelector("#studentName").value;
    studentInfo.age = document.querySelector("#sAge").value;

    studentInfo.gender = document.querySelector("input[name=gender]:checked").value; 
    studentInfo.sClass = document.querySelector("#studentClass").value;

    studentInfo.marks = [];
    /*studentInfo.marks[0] = document.querySelector("#m1").value;
    studentInfo.marks[0] = parseInt(studentInfo.marks[0]);

    studentInfo.marks[1] = document.querySelector("#m2").value;
    studentInfo.marks[1] = parseInt(studentInfo.marks[1]); */

    for (var i = 1; i <= 5; i++) {
        var id = '#m' + i; 
        var mvalue = document.querySelector(id).value;
        mvalue = parseInt(mvalue);
        studentInfo.marks.push(mvalue);
    }

    studentInfo.languagesKnown = [];
    
    
    var checkboxList = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i = 0; i < checkboxList.length; i++) {
        studentInfo.languagesKnown.push(checkboxList[i].value);
    }
    displayStudentDetails();

}
var getTotalAndAvg = () => {
    studentInfo.total = 0;
    for (var i = 0 ; i < studentInfo.marks.length; i++) {
        studentInfo.total += studentInfo.marks[i];
    }
    studentInfo.avg = studentInfo.total / studentInfo.marks.length;
}

var getGrade = () => {
    studentInfo.grade = '';
    if (studentInfo.avg >= 40) {
        studentInfo.grade = 'You passed';
    } else {
        studentInfo.grade = 'You have a surprise';
    }
}

var displayStudentDetails = () => {
    getTotalAndAvg();
    getGrade();
    document.querySelector("#dsname").innerHTML = studentInfo.name;
    document.querySelector("#dage").innerHTML = studentInfo.age;
    document.querySelector("#dgender").innerHTML = studentInfo.gender;
    document.querySelector("#dgrade").innerHTML = studentInfo.grade;
    document.querySelector("#davg").innerHTML = studentInfo.avg;
    document.querySelector("#dtotal").innerHTML = studentInfo.total;
    document.querySelector("#dlangues").innerHTML = studentInfo.languagesKnown.join(" - ");
    
    document.querySelector(".progressCardBlock").style.display = 'block';
   
  
    
    // window.open("file:///F:/UIClasses/UIClasses/Batch_830_AM_July_2023/public/Aug_22/StudentProgressCardGenerator_DynamicReading/showStudenDetails.html?sname=" + studentInfo.name + '&age=' + studentInfo.age);


   
}