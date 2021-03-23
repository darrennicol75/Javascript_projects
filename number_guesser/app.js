// game values 
let min = 1,
    max = 10, 
    winningNum = getRandomNum(min, max),
    guessesLeft = 3; 

//UI elements- if class querySelector and '.----' 
// for class and if id add #
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'), 
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
    
// assign UI min and max 
minNum.textContent = min; 
maxNum.textContent = max; 

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //validate input- conditional to ensure number and between range set
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won 
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct, YOU WIN!`)
        //disable input
        //guessInput.disabled = true;
        // change border to green to show win
        //guessInput.style.borderColor = 'green';
        // set message
        //setMessage(`${winningNum} is correct, YOU WIN!`, 'green')

    } else {
        // if lost minus one from guesses
        guessesLeft -= 1;
        if(guessesLeft === 0){
            gameOver(false, `Game over, you lost, The correct number was ${winningNum}`)
            //game over - lost
            //disable input
            //guessInput.disabled = true;
            // change border to green to show loss
            //guessInput.style.borderColor = 'red';
            // set message
            //setMessage(`Game over, you lost, The correct number was ${winningNum}`, 'red')
        } else {
            // game continues - answer wrong 
            // change borrder color 
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            // tell user its wrong number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }
    }

});

// game over function to reduce code repitition
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    // change border to green to show win
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // play again? 
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'

}

//Get winning number 
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg; 
}

