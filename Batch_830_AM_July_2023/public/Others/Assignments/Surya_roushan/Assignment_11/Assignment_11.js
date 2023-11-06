<<<<<<< HEAD
//write a program to read value from user and to check whether it is prime number or not.

var b = parseInt(prompt(" enter a number "));
var count = 0;

for(a = 2; a < b; a++){
    if(b%a == 0){
        count++;
        break;
    }
}

if(count == 0){
    console.log(" this is a " +b+ " prime number ");
}else{
    console.log(" this is not a  " +b+ " prime number ");
}

// q2. write a program to display all the prime number between 1 to 1000.

var c, d;
count = 0;

for(d = 2; d <= 1000; d++){
    for(c = 1; c<=d; c++){
        if(d%c == 0){
            count++;
        }
    }
    if(count == 2)
    console.log(" the list of prime number from 1 to 1000 " +d);
    count = 0;

}


//Q3. write a program to find the sum of all prime number between 1 to 100.

var e, f;
count = 0;
sum = 0;

for(f=2; f<=100; f++){
    for(e=1; e<=f; e++){
        if(f%e==0){
            count++
        }
    }
    sum = sum + f;
    if(count == 2)
    count=0;

}

console.log(" sum of all prime number between 1 to 100 is " +sum);


//Q 4.  write a program to check whether a given number is armstrong or not.

var num = prompt(" enter  number for armstrong ");
var len = num.length;
num = parseInt(num);
var temp = num;
var sum = 0;
var rem;

while(temp > 0){
    rem = temp%10;
    sum = sum + rem**len;
    temp = parseInt(temp/10);
}

if(sum == num){
    console.log(" this is armstrong number ");

}else{
    console.log(" this is not armstrong number ");
}


// Q 5. write a program to check wheather a given number is parlindrom number or not?

var revNumber = 0;
var g = parseInt(prompt(" enter a number "));
var temp = g;

while(g>0){
    var rem = g%10;
    g = g/10;
    g = parseInt(g);
    revNumber = revNumber*10+rem;
}

console.log(" reverse number is  " +revNumber);
if(temp == revNumber){
    console.log(" this is parlindrom number ")
}else{
    console.log(" this is not a parlindrom number ");
}

// Q 6. write a program to find out all the parlindrom number between 1 to 1000;

var h;
var i;
var count = 0;

for(h=1; h<=1000; h++){

}


// Q7. write a program to read no. form user and find the reverse of it.

var revNumber1 = 0;
var k = parseInt(prompt(" enter a number for reverse checking "));
var temp1 = k;

while(k>0){
    var rem = k%10;
    k = k/10;
    k = parseInt(k);
    revNumber1 = revNumber1*10+rem;
}

console.log(" revNumber is  " +revNumber1);


// Q8. write a program to read number form user and find the lucky of it.

var l = parseInt(prompt(" Enter number for lucky number "));
var rem;
var sum = 0;

while(l>0){
    rem = l%10;
    l = parseInt(l/10);
    sum = sum + rem;
    if(l == 0 && sum>9){
        l = sum;
        sum = 0;
    }
}

console.log(" lucky number is " +sum);






=======
//write a program to read value from user and to check whether it is prime number or not.

var b = parseInt(prompt(" enter a number "));
var count = 0;

for(a = 2; a < b; a++){
    if(b%a == 0){
        count++;
        break;
    }
}

if(count == 0){
    console.log(" this is a " +b+ " prime number ");
}else{
    console.log(" this is not a  " +b+ " prime number ");
}

// q2. write a program to display all the prime number between 1 to 1000.

var c, d;
count = 0;

for(d = 2; d <= 1000; d++){
    for(c = 1; c<=d; c++){
        if(d%c == 0){
            count++;
        }
    }
    if(count == 2)
    console.log(" the list of prime number from 1 to 1000 " +d);
    count = 0;

}


//Q3. write a program to find the sum of all prime number between 1 to 100.

var e, f;
count = 0;
sum = 0;

for(f=2; f<=100; f++){
    for(e=1; e<=f; e++){
        if(f%e==0){
            count++
        }
    }
    sum = sum + f;
    if(count == 2)
    count=0;

}

console.log(" sum of all prime number between 1 to 100 is " +sum);


//Q 4.  write a program to check whether a given number is armstrong or not.

var num = prompt(" enter  number for armstrong ");
var len = num.length;
num = parseInt(num);
var temp = num;
var sum = 0;
var rem;

while(temp > 0){
    rem = temp%10;
    sum = sum + rem**len;
    temp = parseInt(temp/10);
}

if(sum == num){
    console.log(" this is armstrong number ");

}else{
    console.log(" this is not armstrong number ");
}


// Q 5. write a program to check wheather a given number is parlindrom number or not?

var revNumber = 0;
var g = parseInt(prompt(" enter a number "));
var temp = g;

while(g>0){
    var rem = g%10;
    g = g/10;
    g = parseInt(g);
    revNumber = revNumber*10+rem;
}

console.log(" reverse number is  " +revNumber);
if(temp == revNumber){
    console.log(" this is parlindrom number ")
}else{
    console.log(" this is not a parlindrom number ");
}

// Q 6. write a program to find out all the parlindrom number between 1 to 1000;

var h;
var i;
var count = 0;

for(h=1; h<=1000; h++){

}


// Q7. write a program to read no. form user and find the reverse of it.

var revNumber1 = 0;
var k = parseInt(prompt(" enter a number for reverse checking "));
var temp1 = k;

while(k>0){
    var rem = k%10;
    k = k/10;
    k = parseInt(k);
    revNumber1 = revNumber1*10+rem;
}

console.log(" revNumber is  " +revNumber1);


// Q8. write a program to read number form user and find the lucky of it.

var l = parseInt(prompt(" Enter number for lucky number "));
var rem;
var sum = 0;

while(l>0){
    rem = l%10;
    l = parseInt(l/10);
    sum = sum + rem;
    if(l == 0 && sum>9){
        l = sum;
        sum = 0;
    }
}

console.log(" lucky number is " +sum);






>>>>>>> 042d7d5cee4226d7ffbfda79e4e2e46212cb892e
