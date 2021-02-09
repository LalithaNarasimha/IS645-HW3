/*
1.	Class Standing - The program has the following requirements:
Input
Ask the user for their name and number of units completed at college (use prompt).  
Validate input (integer  >= 0, assume no decimal data entry)
Output
Output the following message (Text in Italics will change depending on input)
Hello NameEntered
Your grade standing is GradeStanding

NameEntered – This is the name entered
GradeStanding – Calcluate as follows:
Number of units:
0 – 30: 	Freshman
31 – 60: 	Sophomore
61 – 90:	Junior
> 91:	Senior
 */

// Enter the Name
const name = prompt("Enter the name");
// Enter the Number of units
const units = Number(prompt("Number of units completed in college"));
//Validation of condition
if(units >= 0){
    console.log(`Hello ${name}`);
}
if(units >= 0 && units <= 30){
    console.log("Your grade standing is Freshman");
}else if(units >= 31 && units <= 60){
    console.log("Your grade standing is Sophomore");
}else if(units >= 61 && units <= 90){
    console.log("Your grade standing is Junior");
}else if (units > 91){
    console.log("Your grade standing is Senior");
}
