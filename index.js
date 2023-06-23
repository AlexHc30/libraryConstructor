let myLibrary = [];

function Book(index,title,author,pages,read) {
    this.index = index,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    myLibrary.push(this);
}


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function addNDisplayBooks() {
    let currentBookTitle = null;
    let currentCategory = null;
    const library = document.createElement('div');
    library.setAttribute('class', 'library');
    document.body.insertBefore(library, currentBookTitle);


    // create categories for each object key
    let categories = Object.keys(myLibrary[0]);
    console.log(categories);
    categories.forEach(category => {
        currentCategory = category;
        currentCategory = document.createElement('div');
        currentCategory.setAttribute('id', category);
        currentCategory.setAttribute('class', 'categories col');
        currentCategory.innerText = category;
        library.appendChild(currentCategory);
        console.log(category)
        myLibrary.map(book => {      
            // use for(key in obj) to loop through each key, match with current category add & display
            for(key in book) {
                if(key === category) {
                    let currentBookCategory = book[key];
                    let current = document.createElement('div');
                    current.setAttribute('id', currentBookCategory);
                    current.setAttribute('class', 'row');
                    current.innerText = book[key];
                    currentCategory.appendChild(current);
                }
            }
        })
    });
}


const theHobbit = new Book('1', 'The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
const unbearableLightness = new Book('2', 'Metamorphosis', 'Franz Kafka', '70', 'read');
const Gateway = new Book('3', 'Gateway', 'Frederik Pohl', '278', 'read');

addNDisplayBooks();