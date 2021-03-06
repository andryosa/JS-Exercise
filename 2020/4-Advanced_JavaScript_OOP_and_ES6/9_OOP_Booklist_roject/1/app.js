// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// UI Constructoe
function UI(){}

// add Book To List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list')
    //create tr element
    const row = document.createElement('tr')
    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='a' class = 'delete'>X</a></td>`
    list.appendChild(row)
}

// Clear Field
UI.prototype.clearFields = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value =''
}

// Delete book
UI.prototype.deleteBook = function(target){
if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
}
}


// Event Listner
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get input values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book = new Book(title,author,isbn)

    const ui = new UI();
    // Add Book
    ui.addBookToList(book)
    // CLEAR FIELDS
    ui.clearFields()
    e.preventDefault()
})

// Event Listner for Delete

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);
})