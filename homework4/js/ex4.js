/**
 4.	Password (use loop) - The program has the following requirements:
Input
A password
Output
Assume password is "secret"
If "secret" is not entered, prompt the user for a password again (up to 3 times)
If a correct password is entered, display the following message (# represents number of attempts):
You entered the correct password after # attempt(s)
If after three attempts, the user fails to enter the correct password, display the following message:
Your account is locked!  You failed to enter the correct password # times
Note:  Can hard code three for failure, but if you need to change this it's more difficult.
 */

let pwd = 'secret';
let num = 1;
in_pwd = prompt("Enter the password");
if(pwd == in_pwd){
    console.log("Correct Password")
}else{
    while(true){
        in_pwd = prompt("Enter the correct password");
        if(pwd == in_pwd){
            console.log(`You entered the correct password after ${num} attempsts`)
            break;
        }
        num++;
        if(num == 3){
            console.log(`Your account is locked! You failed to enter the correct password ${num} times`);
            break;
        }
        
    }
}
