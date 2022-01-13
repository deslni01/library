# The Odin Project 2

## Project: Library

### Comments:
- Live page can be found [here](https://deslni01.github.io/library/).

- Currently has the following working functionality: localStorage, form validation, adding to library, removing from library, changing read status between 'Read' and 'Unread'.

- Still need to style the document.

- Don't want to admit how long it took. Some frustrations getting some things to work properly, but eventually found working solutions for each struggle.

- I opted to create the document as a table form rather than cards, as I like the look a little better. 

- The one deviation from the assignment was adding a 'NEW BOOK' button to bring up a form to add books - I've chosen a persistent form at the top of the page to be able to add multiple books much more quickly. Will likely make that a sticky element on scroll-down via CSS so it is always accessible even in a lengthy library.

### Remaining Tasks:
- [x] HTML/JS
- [ ] Style the document
    - [ ] Make purdy
    - [ ] Sticky form for persistence while scrolling large library
- [ ] Footer element - persistent with other personal projects
- [ ] Take over the world

### Assignment:

1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

2. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

    ```javascript
    let myLibrary = [];

    function Book() {
    // the constructor...
    }

    function addBookToLibrary() {
    // do stuff here
    }
    ```

3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

5. Add a button on each book’s display to remove the book from the library.

    - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

6. Add a button on each book’s display to change its read status.

    - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

