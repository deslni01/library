/*
Several options to organize: either cards filling the library shelf, or perhaps a table with each row being a single book with the info. Maybe even both, with a selector for type of view?

*/


// DOM objects
let $form = document.querySelector(".form");
// Note: getElementById() is only available as a method of the global document object, not all element objects, so used querySelector to prevent reporting as 'null' in console
let $titleInput = $form.querySelector("#title");
let $authorInput = $form.querySelector("#author");
let $pagesInput = $form.querySelector("#pages");
let $readInput = $form.querySelector("#read");

let $shelf = document.querySelector("#shelf");

// object constructor:
let myLibrary = [
    {
      title: "A Game of Thrones",
      author: "George R. R. Martin",
      pages: 694,
      read: "read"
    }
  ];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    // take input from forms to fill in Book() function 
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let read = $readInput.value;
    
    let newBook = new Book(title, author, pages, read);
    
    // push to myLibrary array
    myLibrary.push(newBook);
    addToShelf();
    clearForms();
}

// reset form?
function clearForms() {
    $titleInput.value = '';
    $pagesInput.value = '';
    $authorInput.value = '';
    $readInput.value = 'read';
}

// button event handler to submit form to myLibrary array

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#submit').addEventListener("click", addBookToLibrary)    
})

// append array information into the DOM:
function addToShelf() {
    // need to loop over the array's objects for each prop
    for (let i = 0; i < (myLibrary.length); i++) {
        let row = document.createElement("tr");
        Object.values(myLibrary[i]).forEach(val => {
            // console.log(val); -> working!
            // append to DOM!            
            let node = document.createElement("td");
            let textnode = document.createTextNode(val);
            node.appendChild(textnode);
            document.getElementById("shelf").appendChild(row).appendChild(node);
        })
    }   
}

// OK from here - when doing addToShelf(), it's re-adding ALL objects to the page so everything is on there multiple times..
// Also, the pages input isn't requiring numbers...




// button to remove book from library
    /* You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array. */

// button on each book display to change read status
    /* To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance. */


// force capitalization for title, author



// create button to pop up form rather than static form