// DOM objects
let $form = document.querySelector(".form");

let $titleInput = $form.querySelector("#title");
let $authorInput = $form.querySelector("#author");
let $pagesInput = $form.querySelector("#pages");
let $statusInput = $form.querySelector("#status");

let $shelf = document.querySelector("#shelf");

// do I need these?
let $status = document.querySelector("#status-row");
let $delete = document.querySelector("#delete-row");

// myLibrary array
let myLibrary = [
    
    {
      "title": "A Game of Thrones",
      "author": "George R. R. Martin",
      "pages": 694,
      "status": "read"
    },
    {
      "title": "test1",
      "author": "test1",
      "pages": "123",
      "status": "read"
    },
    {
      "title": "test2",
      "author": "test2",
      "pages": "134",
      "status": "unread"
    }
  
];

displayLibrary();

// Display myLibrary
function displayLibrary() {
    for (let i = 0; i < (myLibrary.length); i++) {
        let row = document.createElement("tr");
        Object.values(myLibrary[i]).forEach(val => {      
            let node = document.createElement("td");
            let textnode = document.createTextNode(val);
            node.appendChild(textnode);
            document.getElementById("shelf").appendChild(row).appendChild(node);           
        })
        let deleteBtn = document.createElement("button");
        let buttonText = document.createTextNode("Remove From Library");
        deleteBtn.type = "button";
        deleteBtn.value = "Remove From Library";
        deleteBtn.dataset.bookNum = `${i}`;
        deleteBtn.append(buttonText);
        document.getElementById("shelf").appendChild(row).appendChild(deleteBtn);
    }   
}

// Add new book
    // check validation
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
    // Constructor
    function Book(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

function addBook() {
    if (!validate()) {
        return;
    } else {
        // take input from forms to fill in Book() function 
        let title = $titleInput.value;
        let author = $authorInput.value;
        let pages = $pagesInput.value;
        let status = $statusInput.value;
        
        let newBook = new Book(title, author, pages, status);

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
        // clearForms();
    }
}

// Delete book
function deleteBook() {

}

// Change book status
    // if book = read set to unread, vice versa
    // update Read column



// button event handler to submit form to myLibrary array
document.addEventListener("DOMContentLoaded", () => {    
    document.querySelector('#submit').addEventListener("click", addBook)   
})