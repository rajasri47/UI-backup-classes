// Step 1: Initialize the variable to store the sum

var sum = 0;

for (var i = 1 ; i <= 100; i++) {
    sum += i;      
}

console.log(`The sum of values between 1 to 100 is: ${sum}`);

// Explanation For My Understanding 

// 1 ) sum is 0 
// 2 ) We Loop 100 values and each time add i to sum variables  ( // sum+=i is Same As sum = sum + i; )
// 3 ) At The End of Loop, it will be 100 and when loop breaks, we are printing That Value using Template Litterls
