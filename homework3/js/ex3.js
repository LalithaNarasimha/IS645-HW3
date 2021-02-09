/*3.Simple Calculation - The program has the following requirements:
Input
Two integer numbers (validate input, assume no decimal data entry)
Output
The following mathematical operations for the numbers entered
•	Addition (e.g. num1 + num2 = sum; 3 + 4 = 7)
•	Subtraction
•	Multiplication
•	Division
•	Modulo
 */


while(true){
    num1 = Number(prompt("Enter the first number as Integer"));
    if(Number.isInteger(num1)){
        console.log(`Num1 is :${num1}`);
        break;
    }
}
while(true){
    num2 = Number(prompt("Enter the Second number as Integer"));
    if(Number.isInteger(num2)){
        console.log(`Num1 is :${num2}`);
        break;
    }
}
sum = num1 + num2;
console.log(`Sum of ${num1} and ${num2} = ${sum}`);
sub = num1 - num2;
console.log(`Subtraction of ${num1} and ${num2} = ${sub}`);
product = num1*num2;
console.log(`Product of ${num1} and ${num2} = ${product}`);
div = num1/num2;
console.log(`Division of ${num1} and ${num2} = ${div}`);



