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

    // add book to list 
    ui.addBookToList(book);

    // clear the fields right after book is called (added), use prototype 
    ui.clearFields();

    
    e.preventDefault();
});