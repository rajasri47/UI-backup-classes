//  Write a program to declare a static array with values, find the sum of all the values within it?//

var data = [22, 44, 66, 89, 90];
sum = 0;
for(i = 0; i < data.length; i++) {
    sum = sum + data[i];
}console.log("the sum is " +sum) 

// write a program to take 'n' number array of values?//

var data = [];
for(var i = 0; i < 5; i++) {
    data[i] = prompt("the enter value is" + i + "position");
    data[i] = parseInt(data[i])
}console.log(data)

// write a program to take dynamic array of values and find sum of all the even numbers within it?//

var data = [];
var n = parseInt(prompt("Enter the how many values: "));
for(var i = 0; i < n; i++) {
    data[i] = prompt("enter tha value is "+ i + "position");
    data[i] =parseInt(data[i]);
}console.log(data)

var sum = 0;
for(var i = 0; i < data.length; i++) {
    if(data[i] % 2 == 0) {
        sum += data[i];
    }
}console.log("sum of even values" +sum)

//write a program to find the largest and smallest value within in the given array?//

var data = [23, 45, 78, 56,32, 200,9]
var maxvalue = data[0];
var smallvalue = data[0];
for(var i = 1; i < data.length; i++) {
    if(maxvalue < data[i]) {
        maxvalue = data[i]
    }else if (smallvalue > data[i]){
        smallvalue = data[i]
        
    }
} console.log("largest value " + maxvalue)
console.log("smallest value " + smallvalue)


//write a program to list of all armstrong number within the given array?//


var data = [45, 8, 153, 370, 78, 980, 345, 23];
for(var i = 0; i < data.length; i++) {
    var n = data[i];
    var len = n.toString().length;
    var sum = 0;
    while(n > 0) {
        var rem = n % 10;
        n = n / 10;
        n = parseInt(n);
        sum = sum + (rem ** len);
    }
    if(sum == data[i]){
        console.log(data[i])
    }

}

// write a program to list out all the palindrome numbers within the given array?//

var data = [121, 67, 343, 890, 545, 97, 2002, 789 ];
for(var i = 0; i < data.length; i++) {
    var n = data[i];
    var len = n.toString().length;
    var revnumber = 0;
    while(n > 0) {
        var rem = n % 10;
        n = n / 10;
        n = parseInt(n);
        revnumber = revnumber * 10 + rem;
    }
    if(revnumber == data[i]){
        console.log(data[i])
    }

}

//write a program to findout secondlargest value within the given array[without using sorting]?//

var data = [600, 78, 90, 789, 564, 345, 90, 230, 900];
var maxvalue = data[0];
var secondlarg = 0;
for(var i = 1; i < data.length; i++) {
    if(maxvalue < data[i]){
        if(secondlarg < maxvalue) {
            secondlarg = maxvalue;
        }
        maxvalue = data[i];
    }else if(secondlarg < data[i]){
        secondlarg = data[i];
    }
}console.log(secondlarg)

//write a program to findout all the prime numbers in the given array?//


var data = [23, 67, 33, 89, 55, 11, 7, 90, 40, 28];
for(var i = 0; i < data.length; i++) {
    var count = 0;
    for(var j = 2; j < data[i]; j++) {
        if(data[i] % j == 0) {
            count++;

        }
    }if(count == 0) {
        console.log(data[i]);
    }
}

//write a program to findout all the total numbers of even numbers and total numbers of odd numbers in array?//

var data = [24, 77, 13, 79, 88, 46, 20, 55, 10, 58, 39, 19, 44];
var evennum = 0;
var oddnum = 0;
for(var i = 0; i < data.length; i++) {
    if(data[i] % 2 == 0){
        evennum++;
    }else{
        oddnum++
    }
}console.log("Total numbers of even numbers are: " +evennum);
console.log("Total numbers of odd numbers are: " +oddnum);

//write a program to check whether the given value is existing or not?//

var data = [34, 67, 48, 90, 20, 79, 203, 890, 389];
var num = 890;
console.log(data.includes(num))

//write a program to rearrange the values within the array in both ascending and descending order without using predefined methods?//

var data = [45, 78, 90, 23, 43, 12, 3, 89, 948, 345, 248, 25];
for(var i = 0; i < data.length; i++){
    for(var j = i; j < data.length; j++) {
        if(data[i] > data[j]){
            var temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}console.log(data)

var data = [45, 78, 90, 23, 43, 12, 3, 89, 948, 345, 248, 25];
for(var i = 0; i < data.length; i++){
    for(var j = i; j < data.length; j++) {
        if(data[i] < data[j]){
            var temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}console.log(data)


