// book constructor

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Dummy library

// let myLibrary = [
    
//     {
//       "title": "A Game of Thrones",
//       "author": "George R. R. Martin",
//       "pages": 694,
//       "read": "read"
//     },
//     {
//       "title": "The Hobbit",
//       "author": "JRR Tolkien",
//       "pages": "425",
//       "read": "read"
//     },
//     {
//       "title": "Norse Mythology",
//       "author": "Neil Gaiman",
//       "pages": "432",
//       "read": "unread"
//     }
  
// ];



// UI stuff


    // Display current library
    function displayBooks(book) {
        
        const myLibrary = getBooks();

        myLibrary.forEach((book) => addToShelf(book));

}

    // Add books
    function addToShelf(book) {
        const shelf = document.querySelector('#shelf');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read} (<a href="#" class="read-status">Change</a>) </td>
        <td><a href="#" class="deleteBtn">Delete</a></td>
        `

        shelf.appendChild(row);
    }

    // Remove books
    function removeBookShelf(el) {
        if (el.classList.contains('deleteBtn')) {
            
            el.parentElement.parentElement.remove();
        }
    }


    // Change read status
    // Do I need this? Will changing the object change the book.read value??
 

    // Clear form
    function clearForms() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#pages").value = '';
        document.querySelector("#read").value = 'read';
        
    }


// Storage

    // Get from or create library
    function getBooks() {
        let myLibrary;
        if(localStorage.getItem('myLibrary') === null) { // if no item 'myLibrary'
          myLibrary = []; // since no 'myLibrary', create empty array
        } else {
          myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
        }
    
        return myLibrary;
    }

    // Add to library storage
    function addToLibrary(book) {
        const myLibrary = getBooks();

        myLibrary.push(book);
    
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }

    // Remove from library
    function removeBookLibrary(pages) { // pages as 'indicator' to remove
        const myLibrary = getBooks();

        myLibrary.forEach((book, index) => {
            if(book.pages === pages) {
                myLibrary.splice(index, 1);
            }
        });

    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }

    // Change read status
    function changeStatus(read) { // look at remove from library
        const myLibrary = getBooks();

        myLibrary.forEach((book) => {
            console.log(book.read === read);
        })
        
    }


// Events

    // Display on page load
    document.addEventListener('DOMContentLoaded', displayBooks);

    // Add to library
    document.querySelector('#bookform').addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").value;

        const book = new Book(title, author, pages, read);

        addToShelf(book);

        addToLibrary(book);
        // myLibrary.push(book);

        clearForms();
    })


    // Remove books
    document.querySelector('#shelf').addEventListener('click', (e) => { 
        // change status
        changeStatus(e.target);

        // remove from page
        removeBookShelf(e.target);

        // remove from storage
        removeBookLibrary(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      
    })

    // // change read status
    // document.querySelector('.read-status').addEventListener('click', (e) => {
    //     // changeStatus(e.target);
    // })




    // Change read status
    // document.querySelector('#shelf').addEventListener('click', (e) => {

    //     changeStatus(e.target);

    // })




================================== here= ================


        // Remove from library
        if (document.classList.contains('deleteBtn')) {
            function removeBookLibrary(pages) { // pages as 'indicator' to remove
                const myLibrary = getBooks();
    
                myLibrary.forEach((book, index) => {
                    if(book.pages === pages) {
                        myLibrary.splice(index, 1);
                    }
                });
    
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            }
        } else if (document.classList.contains('read-status')) {
        // Change read status
            function changeStatus() { // look at remove from library
                const myLibrary = getBooks();
    
                myLibrary.forEach((book, index) => {
                    if(book.read === 'read') {
                        book.read === 'unread';
                    } else {
                        book.read === 'read';
                    }
                })
                
            }
        }