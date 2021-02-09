/**
 5.	Multiplication Table (use loop) - The program has the following requirements:
Input
A number (assume valid input)
Output
The multiplication table for the input number multiplied by 0 – 10. 
 */

while(true){
    num = Number(prompt("Enter the number as Integer"));
    if(Number.isInteger(num)){
        console.log(`Number is :${num}`);
        break;
    }
}
for(let i = 0;i <= 10; i++ ){
    console.log(`${num} * ${i} = ${num*i}`);
}