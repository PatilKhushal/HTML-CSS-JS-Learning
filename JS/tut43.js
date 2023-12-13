function game()
{
    let noOfGuess = 10;
    let num = Math.round(Math.random() * 100);
    let guess;
    do
    {
        guess = Number.parseInt(prompt("Guess the number"));
        if(guess == num)
            alert("Thats is the correct guess\nYour Score :\t" + noOfGuess);
        else
        {
            let c = "Remaining Chances " + (--noOfGuess);
            if(guess > num)
                alert("Try to guess lower limit\n" + c);
            else
                alert("Try to guess higher limit\n" + c);

        }
    }while(guess != num && noOfGuess != 0);
}

/* async function consoleGame()
{
    let noOfGuess = 10;
    let num = Math.round(Math.random() * 100);
    let guess;
    do
    {
        guess = Number.parseInt(prompt("Guess the number"));
        if(guess == num)
            console.log("Thats is the correct guess\nYour Score :\t" + noOfGuess);
        else
        {
            let c = "Remaining Chances " + (--noOfGuess);
            if(guess > num)
                console.log("Try to guess lower limit\n" + c);
            else
                console.log("Try to guess higher limit\n" + c);

        }
    }while(guess != num && noOfGuess != 0);
}

consoleGame(); */

game();