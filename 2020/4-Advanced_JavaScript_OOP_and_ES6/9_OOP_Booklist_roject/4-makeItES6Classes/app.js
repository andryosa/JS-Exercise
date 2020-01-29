//Book Constructor
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
}  
    }
    

//UI Constructor
class UI{

//Add Book To List
addBookToList = function(book){
    const list = document.getElementById('book-list')
    //Create tr element
    const row = document.createElement('tr')
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`
  list.appendChild(row)
}

// Clear fields
clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// delete book
deleteBook = function(target){
 if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
 }
    


}
showAlert = function(message, className){
        // Create div
        const div =  document.createElement('div');

        // add classes
        div.className = `alert ${className}`

        // Add Text
        div.appendChild(document.createTextNode(message))

        // Append
            // 1-Get Parent
            const container = document.querySelector('.container')
            // Get Form
            const form = document.querySelector('#book-form')
            // Insert alert
            container.insertBefore(div, form)
            //Timeout after 3 sec - setTimeout
            setTimeout(function(){
                document.querySelector('.alert').remove()
            }, 2000)

    }

}



//Event Listeners
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get inputs values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);
    console.log(book)

    //Instantiate UI
    const ui = new UI();

    //Validation
    if(title === '' || author === '' || isbn === ''){
        //Show Error feed Back
        ui.showAlert('Please fill in all the fields', 'error')
    } else {
    //Add book to list
    ui.addBookToList(book)
    //Clear fields
    ui.clearFields();
    //Show Success feed Back
    ui.showAlert('The Book Added Successfully', 'success')
}

    e.preventDefault(); 
})
//// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //Int UI
    const ui = new UI();

    //Delete book
    ui.deleteBook(e.target);

    e.preventDefault()
})