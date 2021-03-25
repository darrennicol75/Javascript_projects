// book constructor- creates book objects

function Book(title, author, isbn){
    this.title = title;
    this.author = author; 
    this.isbn = isbn;
}

// ui constructor- add/ remove etc. 

function UI(){}

// create prototype in UI class to add book to list 
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // create a table row element 
    const row = document.createElement('tr'); 
    // Insert cols 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    // add text 
    div.appendChild(document.createTextNode(message));
    // insert in dom- get parent 
    const container = document.querySelector('.container'); // . means class
    const form = document.querySelector('#book-form'); // # means ID
    // insert alert
    container.insertBefore(div, form);

    // timeout after three seconds 
    setTimeout(function(){
        document.querySelector('.alert').remove(); // remove needs () as its a function
    }, 3000);
}

// create clear fields 

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listeners 

document.getElementById('book-form').addEventListener('submit', function(e){  
    // On event we want to grab the values from the form
    const title = document.getElementById('title').value; 
    const author = document.getElementById('author').value; 
    const isbn = document.getElementById('isbn').value; 

    // now instantiate a book 
    const book = new Book(title, author, isbn);

    // instantiate a UI object
    const ui = new UI();

    //validate 
    if(title === '' || author === '' || isbn === ''){
        // error alert 
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // add book to list 
        ui.addBookToList(book);

        // show success 
        ui.showAlert('Book added!', 'success');

        // clear the fields right after book is called (added), use prototype 
        ui.clearFields();
    }

    e.preventDefault();
});