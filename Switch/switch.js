let favMonth = prompt("What is your favorite month?");

if (isNaN(favMonth) === false) 
{
    console.log("Please enter a valid month, not numbers!");
}

else
{
    switch (favMonth.toLowerCase()) {
        case "january":
            console.log("The start of a new year!");
            break;
        case "february":
            console.log("That's the second month of the year! Still plenty time to make your goals for the year!");
            break;
        case "march":
            console.log("Third month of the year. The leaves and flowers are coming back!");
            break;
        case "april":
            console.log("Fourth month of the year. Go outside and enjoy the weather!");
            break;
        case "may":
            console.log("Fifth month of the year. My birth month!");
            break;
        case "june":
            console.log("Sixth month of the year. end of spring and the start of summer!");
            break;
        case "july":
            console.log("Seventh month of the year. Hot Weather but perfect pool weather! Make sure to wear sunscreen");
            break;
        case "august":
            console.log("Eight month of the year. Back to School!");
            break;
        case "september":
            console.log("Ninth month of the year. Hello Fall!");
            break;
        case "october":
            console.log("Tenth month of the year. Spooky Season!");
            break;
        case "november":
            console.log("Eleventh month of the year. Thanksgiving!");
            break;
        case "december":
            console.log("twelfth month of the year. Christmas!");
            break;
    }
    if (favMonth === "december" || favMonth === "january" || favMonth === "february") 
    {
        console.log("You love the winter months!")
    }
    else if (favMonth === "june" || favMonth === "july" || favMonth === "august") 
    {
        console.log("You enjoy the summer months!")
    }
    else 
    {
        console.log("Other months are interesting too!")
    }
}
