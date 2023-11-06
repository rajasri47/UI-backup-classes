// write a program to display all even numbers from 1 1000

// My Solution 

for(let num = 1; num<=1000;num++){
    if( num % 2 === 0){
        console.log(num);
    }
}




// ****************************

// ChatGPT Improved Solution 

for (let num = 2; num <= 1000; num += 2) {
    console.log(num);
}

// This code starts the loop with num initialized to 2, which is the first even number. It then increments num by 2 in each iteration, ensuring that only even numbers are considered during the loop. The loop will continue until num reaches 1000, and it will print all even numbers between 1 and 1000, inclusive.


// ****************************


  
