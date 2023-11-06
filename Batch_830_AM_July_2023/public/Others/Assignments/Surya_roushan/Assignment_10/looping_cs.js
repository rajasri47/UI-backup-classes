var num = 1;
var sum = 0;

for (num; num<=100; num++){
    sum = sum + num;
}

console.log(sum);


//write the program to find the sum of  all the value between 99 to 61.

var num2 = 61;
sum = 0;

for (num2; num2<=99; num2++){
    sum = sum + num2;
}

console.log(sum);

//write a program to list out all the even number between 1 to 1000.

var num3 = 1;


for (num3 ; num3<= 1000; num3++){
    if(num3 % 2==0){
        console.log("list of all even numbers form 1 to 1000 " +num3);
    }
}

//write a program to list out all the odd number between 1000 to 100.

var num4 = 100;

for (num4; num4<=1000; num4++){
    if (num4 % 2!= 0){
        console.log("list of the odd number from 100 to 1000 " +num4)
    }
}


// write a program to find the sum of all the odd numbers individually and all the even individually between user given range

var i;
var range = parseInt(prompt("Enter range"));
var sumOdd = 0;
var sumEven = 0;

for(i=1; i<=range; i++){
    if(i%2!=0){
        sumOdd = sumOdd + i;
    }

    if(i%2==0){
        sumEven= sumEven + 1;
    }
}

console.log("sum of odd number between 0 to " +range + "is" + sumOdd);
console.log("sum of even number between 0 to" + range + "is" +sumEven);