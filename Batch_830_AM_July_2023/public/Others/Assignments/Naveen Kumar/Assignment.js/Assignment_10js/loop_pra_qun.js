// WAP to find the some of value b/w 1 to 100.

var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log("sum of value b/w 1 to 100: ", +sum);

// WAP to find the some of all the value b/w 99 to 61

var sum = 0;
for (var i = 99; i >= 61; i--) {
  sum += i;
}
console.log("sum fromm 99  to 61 is:", +sum);

// WAP to list out all the even No. b/w 1 to 1000

var i;
for (var i = 1; i <= 1000; i++) {
  if (i % 2 == 0) {
    console.log("all even no. b/w 1 to 1000:", +i);
  }
}

// WAP to list out all the odd No. bind/w 1000 to 100

var i;
for (var i = 1000; i >= 100; i--) {
  if (i % 2 == 1) {
    console.log("all odd no. b/w 1000 to 100:", i);
  }
}

// WAP to find the sum of all the odd No. indivisually all the even no. indivisually b/w user given range

var i;
var range = parseInt(prompt("enter range"));
var sumOdd = 0;
var sumEven = 0;
for (i = 1; i <= range; i++) {
  if (i % 2 != 1) {
    sumOdd += i;
  }
  if (i % 2 == 0) {
    sumEven += i;
  }
}
console.log("sum of all the odd no. b/w 0 to", +range + "is" + sumOdd);
console.log("sum of all the even no. b/w 0 to", +range + " is" + sumEven);
