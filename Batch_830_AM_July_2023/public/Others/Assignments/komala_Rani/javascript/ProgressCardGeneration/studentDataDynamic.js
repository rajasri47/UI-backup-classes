var studentInfo = {};
var readStudentData = () => {
    studentInfo.name = document.querySelector("#studentName").value;
    studentInfo.age = document.querySelector("#studentAge").value;

    studentInfo.gender = document.querySelector("input[name=gender]:checked").value; 
    studentInfo.sClass = document.querySelector("#studentClass").value;

    studentInfo.marks = [];

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
    document.querySelector("#dlanguages").innerHTML = studentInfo.languagesKnown.join(" - ");
    document.querySelector("#dmarks").innerHTML = studentInfo.total;
    document.querySelector("#davg").innerHTML = studentInfo.avg;
    document.querySelector("#dgrade").innerHTML = studentInfo.grade;

    document.querySelector(".progresscardblock").style.display = 'block';
    
    
}