function getComputerChoice()
{
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    const picked = Math.floor(Math.random() * choices.length);
    console.log(choices[picked])
    return choices[picked]
}

function playRound(playerSelection, computerSelection)
{
    let ps = playerSelection.toUpperCase()
    let cs = computerSelection

    if ( (ps === 'ROCK' && cs === 'SCISSORS') || (ps === 'SCISSORS' && cs === 'PAPER') || (ps === 'PAPER' && cs === 'ROCK') )
    {
        return 1
    }
    else if (ps === cs)
    {
        return -1
    }
    else
    {
        return 0
    }

}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game()
{
    let comp_score = 0
    let player_score = 0
    const choices = ['ROCK', 'PAPER', 'SCISSORS']

    for (let i = 0; i < 5; i++)
    {
        let player_pick = prompt("Enter Rock, paper or scissors:")
        while (!choices.includes(player_pick.toUpperCase()))
        {
            let player_pick = prompt("Enter Rock, paper or scissors:")
        }
        let comp_pick = getComputerChoice()
        res = playRound(player_pick, comp_pick)
        
        
        if (res === 1)
        {
            console.log(`You win! ${player_pick} beats ${comp_pick}`)
            player_score += 1
        }
        else if (res === 0)
        {
            
            comp_score += 1
            console.log(`You lose! ${comp_pick} beats ${player_pick}`)
        }
        else{
            console.log(`Round Draw`)
        }
    }
    console.log("player score: " + String(player_score))
    console.log("PC score: " + String(comp_score))
    if (comp_score === player_score)
    {
        console.log("Match draw")
        
    }
    else if (player_score > comp_score)
    {
        console.log("You win the match")

    }
    else{console.log("PC wins the match")}
}

game()