const stone = 0;
const paper = 1;
const scissor = 2;

const winner = (playerChoice, computerChoice) =>
{
    if(isNaN(playerChoice) || isNaN(computerChoice))
        return "Function invoked by invalid values";

    switch(playerChoice)
    {
        case 0 :
                    if(computerChoice == 0)
                        return "Tie";
                    if(computerChoice == 1)
                    return "Computer Wins";
                
                    return "Player Wins";
                
        case 1 :
                    if(computerChoice == 0)
                        return "Player Wins";
                    if(computerChoice == 1)
                    return "Tie";
                
                    return "Computer Wins";
                
        case 2 :
                    if(computerChoice == 0)
                        return "Computer Wins";
                    if(computerChoice == 1)
                        return "Player Wins";
                    
                    return "Tie";            
    }
}

const choiceStr = (choice) =>
{

    if(choice == 0)
        return "stone";
    if(choice == 1)
        return "paper"
    if(choice == 2)
        return "scissor"
    
    return "Function invoked by invalid values";
}

do
{
    let computerChoice = Math.round(Math.random() * 2);
    let playerChoice = Number.parseInt(prompt("Enter integer\n 0 -----> Stone\n1 -----> Paper\n2 -----> Scissor"));

    console.log(typeof playerChoice);
    if(isNaN(playerChoice))
        alert("Invalid Choice");
    else
        alert("Player Choose :\t" + choiceStr(playerChoice) + "\nComputer Choose :\t" + choiceStr(computerChoice) + "\n" + winner(playerChoice, computerChoice));
}while(confirm("Wanna Play Again!?"));
