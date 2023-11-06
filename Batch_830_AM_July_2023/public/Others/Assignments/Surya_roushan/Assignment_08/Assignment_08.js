var names = "saurabh Roushan ";
var age = 24;
var english = parseInt(prompt("Enter English Marks" )),
hindi = parseInt (prompt("Enter Hindi Marks " )),
maths = parseInt (prompt("Enter Maths Marks" )),
psychology = parseInt (prompt("Enter Psychology Marks" )),
science = parseInt (prompt("Enter Science Marks"  ));

var avg, total;
total = english + hindi + maths + psychology + science;
avg = total/5;

console.log("name is" +  names);
console.log("age is " + age);
console.log("englis is " + english);
console.log("hindi is " + hindi);
console.log("maths is " + maths);
console.log("maths is " + psychology);
console.log("science is " + science);
console.log("avg is " + avg);
console.log("total is " + total);
