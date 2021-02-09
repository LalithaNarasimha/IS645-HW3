/*2.Following Day - The program has the following requirements:
Use the switch/case syntax NOT if/then
Input
A day of the week
Valid input is three letter abbreviation in lower case (validate input):
sun, mon, tue, wed, thu, fri, and sat
Output
Output the following message (Text in Italics will change depending on input)
You entered: DayEntered
The following day is: FollowingDay
*/

//Enter the day of the week
let day = ""
while(true){
    day = prompt("Enter a valid 3 letter abbreviation of the day");
    if(day.length == 3) {
        console.log(`You entered: ${day}`)
        break;
    }
}
switch(day){
    case 'mon':
        console.log("The Following day is : tue");
        break;
    case 'tue':
        console.log("The Following day is : wed");
        break;
    case 'wed':
        console.log("The Following day is :Thur");
        break;
    case 'thu':
        console.log("The Following day is :Fri");
        break;
    case 'fri':
        console.log("The Following day is :sat");
        break;
    case 'sat':
        console.log("The Following day is :sun");
        break;
}    

