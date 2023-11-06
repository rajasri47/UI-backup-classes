<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            ul {
                width: 500px;
                background-color: #ccc;
                margin: 20px auto;
                padding: 20px;
            }
            li {
                list-style: none;
                border: 1px solid;
                margin: 10px;
                padding: 10px;
                background-color: #fff;
            }
            .rblock {
                background-color: yellow;
                display: none;

            }
        </style>
    </head>
    <body>
        <div id="container">hello</div>
        <ul>
            <li>
                Enter first value :
                <input type="text" id="fval">
            </li>
            <li>
                Enter Second value :
                <input type="text" id="sval">
            </li>
            <li>
                <input type="button" value="Get Sum" onclick="getSumOfValues()">
                
            </li>
            <li class="rblock">
                The sum of values is <span></span>
            </li>
        </ul>
        <script>
            var getSumOfValues = () => {
                var userData = {};
                userData.fval = document.querySelector("#fval").value;
                userData.fval = parseInt(userData.fval);
                userData.sval = document.querySelector("#sval").value;
                userData.sval = parseInt(userData.sval);
                userData.sum = userData.fval + userData.sval;
                document.querySelector("span").innerText = userData.sum;

                document.querySelector(".rblock").style.display = 'block';
            }

<<<<<<< Updated upstream
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
=======
            
        </script>
    </body>
</html>
>>>>>>> Stashed changes
