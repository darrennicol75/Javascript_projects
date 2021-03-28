class Book {
    constructor(title, author, isbn){ 
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // create a table row element 
        const row = document.createElement('tr'); 
        // Insert cols- insert info in this format/structure 
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>`;
        
        list.appendChild(row);
    }
    showAlert(message,className){
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
    deleteBook(target){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local storage class 
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else { 
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;
            //Add book to UI
            ui.addBookToList(book);
        });
    }
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event listeners for add

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

        // add book to local storage 
        Store.addBook(book);

        // show success 
        ui.showAlert('Book added!', 'success');

        // clear the fields right after book is called (added), use prototype 
        ui.clearFields();
    }

    e.preventDefault();
});

// Event lisitener for delete 
// first target the list which is 'book-list'

document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteBook(e.target); 

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show message 
    ui.showAlert('Book removed', 'success'); // this needs work as triggers if clicked on row not just X

    e.preventDefault();
});


