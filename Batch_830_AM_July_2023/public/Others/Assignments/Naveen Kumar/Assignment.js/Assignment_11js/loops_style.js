// // WAP to read a value from the user  & to check whether it is prime number or not

var n = parseInt(prompt("Enter a number"));
var i, rem;
var add = 0;
for (i = 2; i < n; i++) {
  rem = n % i;
  if (rem == 0) {
    add++;
    break;
  }
}
if (add == 0) {
  console.log("Number " + n + "is a prime");
} else {
  console.log("Number " + "is not a prime");
}

// // WAP to dislpay all the prime no. b/w 1 to 1000

var i, j;
var q = 0;
for (j = 2; j <= 1000; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) {
      q++;
    }
  }
  if (q == 2) console.log("prime number b/w 1 to 1000 are " + j);
  q = 0;
}

// // WAP to find the sum of all the prime Number b/w 1 to 100.
var i, j;
var q = 0;
var sum = 0;
for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) {
      q++;
    }
  }
  if (q == 2) q = 0;
  sum += j;
}
console.log("Sum of all prime b/w 1 to 100 is " + sum);

// WAP  to check wheather a given number is armstrong number or Not.

var n = prompt("Enter Number for armstrong");
var len = n.length;
n = parseInt(n);
var sum = 0;
var temp = n;
var rem;

while (temp > 0) {
  rem = temp % 10;
  sum += rem ** len;
  temp = parseInt(temp / 10);
}

if (sum == n) {
  console.log("Its armstromg no");
} else {
  console.log("Its not");
}

// WAP to check whether a given Number is a palindrome number

var revNumber = 0;
var n = parseInt(prompt("Enter Number for palindrome"));
var temp = n;

while (n > 0) {
  var rem = n % 10;
  n = n / 10;
  n = parseInt(n);
  revNumber = revNumber * 10 + rem;
}

if (temp == revNumber) {
  console.log("It palindrome");
} else {
  console.log("Not palindrome");
}

// WAP to read a Number from the user & find the lucky Number of it

var n = parseInt(prompt("Enter Number for lucky number"));
var rem;
var sum = 0;
while (n > 0) {
  rem = n % 10;
  n = parseInt(n / 10);
  sum += rem;
  if (n == 0 && sum > 9) {
    n = sum;
    sum = 0;
  }
}
console.log("Lucky no. is" + sum);
