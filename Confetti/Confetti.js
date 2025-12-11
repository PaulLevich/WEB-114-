function Calculator() {


    let entryCount = 0;
    let total = 0;
    let number = 0;
    let Operator = " "

    let username = prompt("What is your name? ");
    console.log(username);
    let Continue = prompt("If you would like to start this program (Type 1)\nIf you would to exit (Type -1)")
    if (Continue != -1) {
        number = parseFloat(prompt("Enter Your First Number to use in the calculator."));
        console.log(number);
    }
    function calculator() {

        while (Continue != -1) {
            total = number;
            ++entryCount;
            Operator = prompt("Would you like to...\nAdd(Type A)\nSubtract(Type S)\nMultiply(Type M)\nDivision(Type D)").toLowerCase()
            console.log(Operator);
            number = parseFloat(prompt("Enter your Second Number to use in the calculator.\n"));
            console.log(number);
            Continue = prompt("Enter 1 to Continue or Enter -1 to finish")
            
            if (Operator === "a") {
                total = total + number;
            }
            else if (Operator === "s") {
                total = total - number;
            }
            else if (Operator === "m") {
                total = total * number;
            }
            else if (Operator === "d") {
                total = total / number;
            }
            else {
                alert("Invalid Operator. Try again");
            }
            
        }
        if (entryCount > 0) {
            console.log(total)
            return total;
        }
        else { 
            return total = 0;
        }
    }

    calculate = calculator();
    confirm(username + "'s Calculated Total " + calculate.toFixed(2));
    console.log(username + "'s Calculated Total " + calculate.toFixed(2));
    if (entryCount === 0) {
        confirm("Nothing was Entered");
        console.log("Nothing was Entered");
    }
    else if (entryCount === 1) {
        confirm(`You entered ${entryCount} Number.`);
        console.log(`You entered ${entryCount} Number.`);
    }
    else {
        confirm(`You entered ${entryCount} Numbers.`);
        console.log(`You entered ${entryCount} Numbers.`);
    }
}

document.getElementById("Calculator-Btn").addEventListener('click', Calculator)

const button = document.getElementById('confettiButton');
button.addEventListener('click', () => {

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 35,
        spread: 360,
        ticks: 120,
        zIndex: 1000
    };

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        for (let i = 0; i < 3; i++){
            confetti(Object.assign({}, defaults, {
                particleCount: 25,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.2
                }
            }));
        }
    }, 150);
});
