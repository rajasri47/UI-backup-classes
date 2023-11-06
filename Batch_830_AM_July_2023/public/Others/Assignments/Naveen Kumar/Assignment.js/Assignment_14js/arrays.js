// 1) WAP to declear an array static array with CSSMathValue, find the sum of all the values with in instanceof.
// var data = [99, 34, 56, 78, 90];

var vardata = [99, 34, 56, 78, 90];
var sumOfValues = 0;
for (var i = 0; i < vardata.length; i++) {
  sumOfValues += vardata[i];
}

console.log("Sum of values:", sumOfValues);

// 2) WAP to take a dynamic array of a values & find the sum of all even number with in it

function readInputArray() {
  var input = prompt("Enter even number:");
  var inputArray = [];

  var currentValue = " ";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === " , ") {
      inputArray.push(Number(currentValue));
      currentValue = " ";
    } else {
      currentValue += input[i];
    }
  }
  inputArray.push(Number(currentValue));

  return inputArray;
}

function sumOfEvenNumber(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

var dynamicArray = readInputArray();
var evenSum = sumOfEvenNumber(dynamicArray);

console.log("Sum of even number:", evenSum);

// 3) Write a program to find out the prime number with in the given array

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimeNumbers(array) {
  var primeNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primeNumbers.push(array[i]);
    }
  }
  return primeNumbers;
}

var inputArray = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 17, 20];
var primeNumbersArrays = findPrimeNumbers(inputArray);

console.log("Prime number in the array:", primeNumbersArrays);

// 4) Write a program to find out the total Number of even number
// & total number of odd number with in the arrays

function countEvenOddNumbers(numbers) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    }
  }
  return { even: evenCount, odd: oddCount };
}

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var counts = countEvenOddNumbers(numberArray);

console.log("Total even numbers:", counts.even);
console.log("Total odd numbers", counts.odd);

// 5) WAP to find out the largest & smallest value with in the given array without using sorting.

var data = [33, 123, 11, 44, 201, 55, 66, 77, 22, 89, 100];
var maxValue = data[0];

for (var i = 1; i < data.length; i++) {
  if (maxValue < data[i]) {
    maxValue = data[i];
  }
}

console.log(maxValue);

var maxValue = data[0];

for (var i = 1; i < data.length; i++) {
  if (maxValue > data[i]) {
    maxValue = data[i];
  }
}

console.log(maxValue);

// 6) WAP to find out the 2nd largest value with in the given array without using sorting.

var data = [202, 33, 123, 11, 44, 201, 55, 66, 77, 22, 89, 100];
console.log(data);

var max = data[0];
var secondLarg = data[0];

for (var i = 1; i < data.length; i++) {
  if (max < data[i]) {
    if (secondLarg < max) {
      secondLarg = max;
    }
    max = data[i];
  }
}

console.log("max is " + max);
console.log("secondLarg is " + secondLarg);

// 7)WAP to check whether  the given value is existing within the array or not

function checkIfNumberExists(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

var numberArray = [10, 20, 30, 40, 50];
var searchNumber = 30;

if (checkIfNumberExists(numberArray, searchNumber)) {
  console.log(searchNumber + "exist in the array.");
} else {
  console.log(searchNumber + "does not exist in the array.");
}

//  8) WAP to list out all the palindrom number with in the given arrays

function isPalindrome(num) {
  var numStr = "" + num;
  var length = numStr.length;

  for (var i = 0; i < Math.floor(length / 2); i++) {
    if (numStr[i] !== numStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function listPalindromeNumbers(arr) {
  var palindromeNumbers = [];

  for (var i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromeNumbers.push(arr[i]);
    }
  }

  return palindromeNumbers;
}

var numberArray = [121, 123, 1331, 454, 56765, 78987];
var palindromeNumbers = listPalindromeNumbers(numberArray);

console.log("Palindrome numbers in the array:", palindromeNumbers);

// 9) WAP to list out all the armstrong number with in the given arrays

function isArmstrongNumber(num) {
  var numStr = num.toString();
  var power = numStr.length;
  var sum = 0;

  for (var i = 0; i < numStr.length; i++) {
    sum += multiplyDigits(numStr[i], power);
  }

  return sum === num;
}

function multiplyDigits(digit, power) {
  var result = 1;
  var digitInt = parseInt(digit);

  for (var i = 0; i < power; i++) {
    result *= digitInt;
  }

  return result;
}

function findArmstrongNumbersInArray(arr) {
  var armstrongNumbers = [];

  for (var i = 0; i < arr.length; i++) {
    if (isArmstrongNumber(arr[i])) {
      armstrongNumbers[armstrongNumbers.length] = arr[i];
    }
  }

  return armstrongNumbers;
}

var inputArray = [153, 370, 371, 407];
var armstrongNumbersInArray = findArmstrongNumbersInArray(inputArray);

console.log("Armstrong numbers in the array:", armstrongNumbersInArray);
