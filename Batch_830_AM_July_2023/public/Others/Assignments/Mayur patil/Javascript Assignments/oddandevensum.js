// Write a Program to find The sum off all the odd Numbers Indivually and al the even individually between user give range 

// Even Numbers SUM 

let sum = 0
// let range=prompt("Enter Range");  // User Input 
let range = 20; // Hard Coded 

for (let num = 1; num <= range; num++) {
    if (num % 2 === 0 ) {
        sum += num;
    }
}
console.log(sum);

// Odd Numbers SUM

let evensum = 0 ;
// let evenRange=prompt("Enter Range");  // User Input
let evenrange= 50 ;                     // Hard Coded

for (let num = 1; num <= evenrange; num++) {
    if (num % 2 === 1 ) {
        evensum += num;
    }
}
console.log(evensum);