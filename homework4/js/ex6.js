/*6.	Following Second - The program has the following requirements:
Input
Time as three values: hours, minutes, seconds (validate input)
Output
Output the time entered and the time one second later.
Examples:
Time input: 14h17m59s
One second later: 14h18m0s

Time input: 6h59m59s
One second later: 7h0m0s

Time input: 23h59m59s
One second later: 0h0m0s */
let hour;
let minutes;
let seconds;

while(true){
    num = Number(prompt("Enter hours"));
    if(num >= 0 && num < 24){
        hour = num;
        break;
    }
}

while(true){
    num = Number(prompt("Enter minutes"));
    if(num >= 0 && num <= 59){
        minutes = num;
        break;
    }
}

while(true){
    num = Number(prompt("Enter seconds"));
    if(num >= 0 && num <= 59){
        seconds = num;
        break;
    }
}
console.log(`Time input: ${hour}h${minutes}m${seconds}s`);

seconds = seconds + 1;
if(seconds == 60){
    seconds = 0; 
    minutes = minutes + 1;
    if(minutes == 60){
        minutes = 0;
        hour = hour + 1;
        if(hour == 24){
            hour = 0;
        }
    } 
}
console.log(`One Second Later:${hour}h${minutes}m${seconds}s`);