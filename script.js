let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
    return Math.floor(Math.random() * 10 )
}

/*const compareGuesses = (humanGuess, computerGuess, secret)=>{
    if (humanGuess === computerGuess){
        return  true;
    }else if(humanGuess === secret){
        return  true;
    }else if(computerGuess === secret){
        return  false;
    }else if(Math.abs(humanGuess - secret) > Math.abs(computerGuess - secret)){
        return false;
    }else if(Math.abs(humanGuess - secret) < Math.abs(computerGuess - secret)){
        return true;
    }
}*/
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
}



const updateScore = winner =>{
    if(winner === 'human'){
        humanScore ++;
    }else if(winner === 'computer' ){
        computerScore ++;
    }
}


const advanceRound = ()=> currentRoundNumber++;  

/*let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}


const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;*/
