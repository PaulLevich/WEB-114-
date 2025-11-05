let choice = prompt("Enter your choice:\n\n 1. Add two numbers\n 2. Subtract two numbers\n 3. Multiply two numbers\n 4. Divide two numbers\n 5. Exit");
let num1 = 0
let num2 = 0
switch(parseInt(choice))
{
    case 1:
       num1 = parseInt(prompt("What is your first number?"));
       num2 = parseInt(prompt("What is your second number?")); 
       sum = num1 + num2;
       alert("Sum: " + sum);
       break;
    case 2:
       num1 = parseInt(prompt("What is your first number?"));
       num2 = parseInt(prompt("What is your second number?")); 
       sum = num1 - num2;
       alert("Sum: " + sum);
       break;
    case 3:
        num1 = parseInt(prompt("What is your first number?"));
       num2 = parseInt(prompt("What is your second number?")); 
       sum = num1 * num2;
       alert("Sum: " + sum);
       break;
    case 4:
       num1 = parseInt(prompt("What is your first number?"));
       num2 = parseInt(prompt("What is your second number?")); 
       sum = num1 / num2;
       alert("Sum: " + sum);
       break;
    case 5:
        alert("Exiting the program.")
        break;

    default:
        alert("That was an invalid choice!")
}


