let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    myLibrary.push(this);
}


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function addNDisplayBooks() {
    let index = 0;
    let currentBook = null;
    let currentCategory = null;
    const library = document.createElement('div');
    library.setAttribute('class', 'library');
    document.body.insertBefore(library, currentBook);


    // create categories for each object key and display them
    let categories = Object.keys(myLibrary[0]);
    console.log(categories);
    categories.forEach(category => {
        currentCategory = category;
        currentCategory = document.createElement('div');
        currentCategory.setAttribute('id', category);
        currentCategory.setAttribute('class', 'categories');
        currentCategory.innerText = category;
        library.appendChild(currentCategory);
    });


    //use map to loop through each book from array
    myLibrary.map(book => {      
        let bookInfo = book.title + ' by ' + book.author;
        // add new DOM element for each book & display each book
        currentBook = document.createElement('div');
        currentBook.setAttribute('id', "Book" + index);
        currentBook.setAttribute('class', "books");
        currentBook.innerText = bookInfo;
        index++;
        library.appendChild(currentBook);
    })

    displayBooks();
}

function displayBooks() {
    myLibrary.map
    let book = Object.values(myLibrary[0]);
    console.log(book);
    console.log(myLibrary[0]);
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
// console.log(theHobbit.info());
const unbearableLightness = new Book('The Unbearable Lightness of Being', 'JMilan Kundera', '320', 'read');
const Gateway = new Book('Gateway', 'Frederik Pohl', '278', 'read');

addNDisplayBooks();