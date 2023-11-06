// Write a Program to list all odd Numbers between 1000 to 100

for(let num = 1000; num>=100;num--){
    if( num % 2 === 1){
        console.log(num);
    }
}
 

// Optimised Solution By ChatGPT

for(let num=999;num>=100;num-=2){
    console.log(num)
}
