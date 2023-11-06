// prime number or not
var n = parseInt(prompt("Enter a number for prime check"));
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
  console.log("Number " + n + " is a prime");
} else {
  console.log("Number " + n + " is not a prime");
}

//prime between 1 to 1000
var i, j;
var q = 0;
for (j = 2; j <= 1000; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) {
      q++;
    }
  }
  if (q == 2) console.log("prime number between 1 to 1000 are " + j);
  q = 0;
}

//sum of prime between 1 to 100
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
console.log("Sum of all prime between 1 to 100 is " + sum);

//Armstrong no.
var no = prompt("Enter Number for Armstrong");
var len = no.length;
no = parseInt(no);
var sum = 0;
var temp = no;
var re1;

while (temp > 0) {
  re1 = temp % 10;
  sum += re1 ** len;
  temp = parseInt(temp / 10);
}

if ((sum = no)) {
  console.log("It'armstong no");
} else {
  console.log("It's not an armstong no");
}

//palindrome
var revNumber = 0;
var n = parseInt(prompt("Enter Number for palindrome"));
var temp = n;

while (n > 0) {
  var rem = n % 10;
  n = n / 10;
  n = parseInt(n);
  revNumber = revNumber * 10 + rem;
}

console.log("Reverse is " + revNumber);
if (temp == revNumber) {
  console.log("Its palindrome ");
} else {
  console.log("Not  palindrome ");
}

//lucky no
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
console.log("Lucky no is  " + sum);
