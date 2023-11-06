//write a program to read a value from user and to check whether it is prime or not?//

var n = parseInt(prompt(("enter a number")));
var count = 0;
for(var i = 2; i < n; i ++) {
    var rem = (n % i)
    if(rem == 0) {
        count++;
        break;
    }
}if(count == 0) {
    console.log("its a prime number")
}else{
    console.log("its not a prime number")
}

// write a program  to display all the prime numbers between 1 to 1000?//

var count = 0;
for(var i = 2; i <= 1000; i ++) {
    for(var j = 1; j <= i; j++) {
        if(i % j == 0){
            count++;
        }
    }if(count == 2)
    console.log( "prime numbers between 1 to 1000 is: " +i);
    count = 0;
}

// write a program to sum of all prime numbers between 1 to 100?//

var count = 0;
var sum = 0;
for(var j = 2; j <= 100; j++) {
    for(var i = 1; i <= j; i++) {
        if(j % i == 0){
            count++;
        
        }
    }if(count == 2)
    sum += j;
    count = 0;
}console.log("sum of prime numbers: " + sum)