// wap sum - 1 to 100

var i;
var sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is " + sum);

// wap sum - 99 to 61
var i;
var sum = 0;
for (i = 99; i >= 61; i--) {
  sum += i;
}
console.log("Sum from 99 to 61 is " + sum);

// wap even - 1 to 1000

var i;
for (i = 1; i <= 1000; i++) {
  if (i % 2 == 0) {
    console.log("Even number from 1 to 1000 is " + i);
  }
}

// wap odd - 1000 to 100

var i;
for (i = 1000; i >= 100; i--) {
  if (i % 2 != 0) {
    console.log("Odd number from 1000 to 100 is " + i);
  }
}

// wap sum of odd and even (range by user)

var i;
var range = parseInt(prompt("enter range"));
var sumOdd = 0;
var sumEven = 0;
for (i = 1; i <= range; i++) {
  if (i % 2 != 0) {
    sumOdd += i;
  }
  if (i % 2 == 0) {
    sumEven += i;
  }
}
console.log("Sum of odd number between 0 to " + range + " is " + sumOdd);
console.log("Sum of even number between 0 to " + range + " is " + sumEven);

