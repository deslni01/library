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


let myLibrary = [
    
        {
          "title": "A Game of Thrones",
          "author": "George R. R. Martin",
          "pages": 694,
          "read": "read"
        },
        {
          "title": "test1",
          "author": "test1",
          "pages": "123",
          "read": "read"
        },
        {
          "title": "test2",
          "author": "test2",
          "pages": "134",
          "read": "unread"
        }
      
];

displayLibrary();

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// display current myLibrary array
function displayLibrary() {
    for (let i = 0; i < (myLibrary.length); i++) {
        // let row = document.createElement("tr");
        Object.values(myLibrary[i]).forEach(val => {            
            // append to DOM            
            // let node = document.createElement("td");
            // let textnode = document.createTextNode(val);
            // node.appendChild(textnode);
            // document.getElementById("shelf").appendChild(row).appendChild(node);
            displayNewBook();
        })
    }   
}

// 2. receive input from page
function addBookToLibrary() {
    // check form validation
    if (!validate()) {
        return;
    } else {
        // take input from forms to fill in Book() function 
        let title = $titleInput.value;
        let author = $authorInput.value;
        let pages = $pagesInput.value;
        let read = $readInput.value;
        
        let newBook = new Book(title, author, pages, read);

        // 3. push to myLibrary array
        myLibrary.push(newBook);

        // 4. add input from page to current display
        let row = document.createElement("tr");
        Object.values(newBook).forEach(val => {
            let node = document.createElement("td");
            let textnode = document.createTextNode(val);
            node.appendChild(textnode);
            document.getElementById("shelf").appendChild(row).appendChild(node);
        });
        // 5. clear input forms
        clearForms();
    }
}

function displayNewBook() {
    let row = document.createElement("tr");
    Object.values(newBook).forEach(val => {
        let node = document.createElement("td");
        let textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("shelf").appendChild(row).appendChild(node);
    })
}

// reset input form
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


function validate() {
    if (document.bookform.title.value == "") {
        return false;
    } else if (document.bookform.author.value == "") {
        return false;
    } else if (document.bookform.pages.value == "") {
        return false;
    }
    return true;
}

// button on each book display to change read status
    /* To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance. */
    function displayLibrary() {
        for (let i = 0; i < (myLibrary.length); i++) {
            let row = document.createElement("tr"); 
            Object.values(myLibrary[i]).forEach(val => {
                if (val == 'read' || val == 'unread') {
                    
                    
                    let label = document.createElement("label");
                    label.classList.add = "label";
                    let node = document.createElement("input");
                    node.type = "checkbox";
                    // node.checked = true;
                    node.classList.add = "label__input";
                    
                    // add div class for circle
                    let circle = document.createElement("div");
                    circle.classList.add = "label__circle";
                    // append both
                    document.getElementById("shelf").appendChild(row).appendChild(label).appendChild(node);
                    document.getElementById("shelf").appendChild(row).appendChild(label).appendChild(circle);       
                
                } else {
                // } else {
                    // readStatus();
                    // append to DOM  
                            
                    let node = document.createElement("td");
                    let textnode = document.createTextNode(val);
                    node.appendChild(textnode);
                    document.getElementById("shelf").appendChild(row).appendChild(node);


                }
            })
        }   
    }

    function readStatus() {
        // add checkbox input w/class
        let label = document.createElement("label");
        label.classList.add = "label";
        let node = document.createElement("input");
        node.type = "checkbox";
        node.checked = true;
        node.classList.add = "label__input";
        // add div class for circle
        let circle = document.createElement("div");
        circle.classList.add = "label__circle";
        // append both
        document.getElementById("shelf").appendChild(row).appendChild(label).appendChild(node);
        document.getElementById("shelf").appendChild(row).appendChild(label).appendChild(circle);
    }
    // from here -> combine the if to if val === 'read' || val === 'unread' (or figure out how to use the key) then add checkbox + div, and figure out how to set checkbox to 'read' or 'unread'
    // if !read = read; if read = !read;

    // for addbooktolibrary() -> let read = getReadValue() function?
        // make function to determine read value based on checkbox feedback
            

    // create function to change object's 'read' or 'unread' to opposite
    // if node.checked = true; -> node.checked = false; else if node.checked = false -> node.checked = true;

    // add function to prototype

    // add checkbox to display read status

    // add checkbox to prototype?


// button to remove book from library
    /* You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array. */
    // function to add books also adds data-key for myLibrary.length-1 on creation; 



// force capitalization for title, author



// create button to pop up form rather than static form


/* Problems:
- FIXED! OK from here - when doing addToShelf(), it's re-adding ALL objects to the page so everything is on there multiple times..
    // Maybe the simple solution is a current myLibrary that is called on page load, and when addToShelf() is called it doesn't replicate myLibrary - so maybe a currentLibrary and a newLibrary? currentLibrary receives the new book, but only populates on reload (so put at top of script), and newLibrary adds new books to currentLibrary and only appends the new books

- FIXED! Also, the pages input isn't requiring numbers...
    // can't figure out why HTML validation not working - requires JS val?
    // added validate() function, but the only problem is after submitting, it goes back to the Title input and pops up requirement
- 
*/