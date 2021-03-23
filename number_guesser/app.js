// game values 
let min = 1,
    max = 10, 
    winningNum = 2,
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

// listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //validate input- conditional to ensure number and between range set
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won 
    if(guess === winningNum){
        //disable input
        guessInput.disabled = true;
        // change border to green to show win
        guessInput.style.borderColor = 'green';
        // set message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green')

    } else {

    }

});

// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg; 
}

