// first get the button call on click
document.querySelector('.get-jokes').addEventListener('click', getJokes); // use querySelector because its a class use getElementById if id

// on click we need to ask  for next action, create a function 

function getJokes(e){
    //console.log('get jokes');
    // grab number of jokes requested 
    const number = document.querySelector('input[type="number"]').value;
    //console.log(number);

    // create XHR request object 
    const xhr = new XMLHttpRequest();
    // open the file, firstly with a get request and then a dynamic input and true for async 
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // what we do with data once we get it
    // check that the status is ok '200', using this. as in on the xhr object
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText); // sets api return to variable- because its a JSON it needs parsed
            //console.log(response);
            
            // above returns a response now display in page
            let output = '';

            if(response.type === 'success'){
                // because we can have a number of options on number of jokes
                // use a forEach loop but not on response but on response.value 
                // (api JSON file dependent) which is array of returned jokes
                // add in call back function to get the joke
                // and add to output as a list item
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                })
            } else {
                output += '<li>Something went wrong</li>'
            }

            // return the output list to html in this case to ul class jokes 
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // send file
    xhr.send();
    // add in prevent default for it to remain
    e.preventDefault();
}


// basic API to call and render to page,not all so easy, most have authentication
// requirements such as OAUTH and keys are needed to call for information. 
