var studentInfo = {};
var readStudentData = () => {
    studentInfo.name = document.querySelector("#studentName").value;
   studentInfo.age = document.querySelector("#studentAge").value;
    studentInfo.gender = document.querySelector("input[name=gender]:checked").value;
    studentInfo.class = document.querySelector("#studentClass").value;
    

    studentInfo.marks = [];
    for (i = 1; i < 6 ; i++){
        var id = "#m" + i;
        var mvalue = document.querySelector(id).value;
        mvalue = parseInt(mvalue);
        studentInfo.marks.push(mvalue);
    }

    studentInfo.languageknown = [];
    var checkboxList = document.querySelectorAll("input[type=checkbox]:checked");
    for (i = 0; i < checkboxList.length; i++){
        studentInfo.languageknown.push(checkboxList[i].value);
    }
    displayStudentDetails();
}

var getTotalAndAvg = () => {
     studentInfo.total = 0;
     for (i = 0; i < studentInfo.marks.length; i++){
        studentInfo.total += studentInfo.marks[i];
     }
     studentInfo.avg = studentInfo.total / studentInfo.marks.length;
}

var getGrade = () => {
    studentInfo.Grade = "";
    if (studentInfo.avg >= 40)
    {
        studentInfo.Grade = "you are passed"
    }
    else
    {
        studentInfo.Grade = "you are failed"
    }
}
var displayStudentDetails  = () => {
    getTotalAndAvg();
    getGrade();
    document.querySelector("#dname").innerHTML = studentInfo.name;
    document.querySelector("#dage").innerHTML = studentInfo.age;
    document.querySelector("#dgender").innerHTML = studentInfo.gender;
    document.querySelector("#dclass").innerHTML = studentInfo.class;
    document.querySelector("#dlanguage").innerHTML = studentInfo.languageknown;
    document.querySelector("#dtotal").innerHTML = studentInfo.total;
    document.querySelector("#davg").innerHTML = studentInfo.avg;
    document.querySelector("#dgrade").innerHTML = studentInfo.Grade;
    document.querySelector("#reportcard").style.display = 'block';
}

