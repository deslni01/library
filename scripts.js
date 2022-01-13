// book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


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
        <td>${book.read} (<a href="#" class="read-status">Change</a>)</td>
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

    // Update read status
    function updateStatus(el, pages) {
        const myLibrary = getBooks();

        myLibrary.forEach((book) => {
            if (book.pages === pages) {
                // console.log(el.innerHTML);
                el.innerHTML = `
                ${book.read} (<a href="#" class="read-status">Change</a>)
                `        
            }
        });
    }
    
    // Clear form
    function clearForms() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#pages").value = '';
        document.querySelector("#read").value = 'Read';    
    }


// Storage
    // Get from or create library
    function getBooks() {
        let myLibrary;

        if(localStorage.getItem('myLibrary') === null) { 
          myLibrary = []; 
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

    // Change reading status
    function changeStatus(pages) {
        const myLibrary = getBooks();

        myLibrary.forEach((book) => {
            if (book.pages === pages) {
                if (book.read === 'Read') {
                    book.read = 'Unread';                
                } else if (book.read === 'Unread') {
                    book.read = 'Read';
                }                 
            }
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        });
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

        clearForms();
    })

    // Remove books
    document.querySelector('#shelf').addEventListener('click', (e) => { 
        // change status
        if (e.target.classList.contains("read-status")) {
            // change status on storage
            changeStatus(e.target.parentElement.previousElementSibling.textContent);

            // change status on page
            updateStatus(e.target.parentElement, e.target.parentElement.previousElementSibling.textContent);
        }

        // changeStatus(e.target.read);
        if (e.target.textContent === 'Delete') {
            // remove from page
            removeBookShelf(e.target);
            
            // remove from storage
            removeBookLibrary(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        }
    })