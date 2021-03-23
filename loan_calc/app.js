// Listen for submit 
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';
    //show loader
    document.getElementById('loading').style.display = 'block';
    //time out after 2 seconds 
    setTimeout(calculateResults, 2000);

    e.preventDefault(); 
});

//Calculate Results
function calculateResults(){
    console.log('Calculating....');
    // UI Variables- i.e. what is entered in form
    const amount = document.getElementById('amount'); 
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment'); 
    const totalPayment = document.getElementById('total-payment'); 
    const totalInterest = document.getElementById('total-interest'); 

    const principal = parseFloat(amount.value); 
    const calculatedInterest = parseFloat(interest.value) / 100 / 12; 
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payments 
    const x = Math.pow(1 + calculatedInterest, calculatedPayments); 
    const monthly = (principal*x*calculatedInterest)/(x-1); 

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2); // .value is who you insert something in the 
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        // show results 
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check numbers')
    }
}

function showError(error){
    // show results 
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card'); // get the card to get the heading
    const heading = document.querySelector('.heading'); // get heading as this is where we insert the warning div
    // add class 
    errorDiv.className = 'alert alert-danger'; // type of insery
    //create text node and append div 
    errorDiv.appendChild(document.createTextNode(error)); // pass in the showError text from if loop
    //insert error above heading
    card.insertBefore(errorDiv, heading); // pass in the errorDiv and where you want located

    //clear error after three seconds
    setTimeout(clearError, 3000); //clearError is a function 3000 = 3seconds
}

function clearError(){ 
    document.querySelector('.alert').remove(); //this grabs the alert class in showError function and removes it after 3000 ms-1
}


