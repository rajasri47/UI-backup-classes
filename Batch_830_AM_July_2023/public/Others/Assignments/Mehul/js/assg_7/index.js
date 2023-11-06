//sum of all  even numbers within the array
var data = [];
var sum = 0;
for (var i = 0; i < 5; i++) {
  data[i] = parseInt(prompt("Enter data " + i));
  if (data[i] % 2 == 0) {
    sum += data[i];
  }
}
console.log("La somme est " + sum);

//prime number within the array
var prime = [];

function isPrime(item) {
  var identifier = item / 2;
  for (var j = 2; j <= identifier; j++) {
    if (item % j == 0) {
      return false;
    }
  }
  return true;
}
for (var index = 0; index < data.length; index++) {
  if (isPrime(data[index])) {
    prime.push(data[index]);
  }
}

console.log(prime);

//total number of even and odd within the array
var oddCount = 0;
var evenCount = 0;
for (var i = 0; i < 5; i++) {
  if (data[i] % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("Even Count is " + evenCount);
console.log("Odd Count is " + oddCount);
