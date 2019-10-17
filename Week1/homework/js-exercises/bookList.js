// THE BOOK LIST

const books = [
    {
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        alreadyRead: false,
        cover: "the-design-of-everyday-things.jpeg"
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        cover: "the-most-human-human.jpeg"
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        alreadyRead: false,
        cover: "the-great-gatsby.jpeg"
    }
];

const total = books.length;

const body = document.body;
console.log(body);

// create ul and appendChild it to the body.
const ul = document.createElement('ul');
document.body.appendChild(ul);

/* creates a 'book element' with <li> tags, puts <p> tags inside of it with book info,
adds 'id' and appends all to the <ul> */
function createBookList(tag, text, id) {
    const el = document.createElement(tag);
    el.innerHTML = text;
    el.setAttribute('id', id);
    ul.appendChild(el);

    return el;
}

// returns the color according to alreadyRead value.
function checkedTheBook(book) {
    return book.alreadyRead === true ? 'green' : 'red';
}

// 1. Iterate through the array of books.

for (let i = 0; i < total; i++) {

    // 2. For each book, create a p element with the book title and author and append it to the page.
    const item = `<p> Book title: ${books[i].title} by ${books[i].author}<br>
        <b><span class ='read'>READ</span></b></p>`;

    createBookList('li', item, [i]);

    //Add an <img> to each book that links to a URL of the book cover.
    const bookImage = document.createElement('img');
    bookImage.src = books[i].cover;
    document.getElementById([i]).appendChild(bookImage);

    const color = checkedTheBook(books[i]);

    // Change the style of the book depending on whether you have read it (green) or not (red).

    const read = document.getElementsByClassName('read'); //this gives us an array of the selected elements.

    // giving color to  <span> tags with the class name 'read'. 
    read[i].style.color = color;

    //=========================
    //for styling the all text,
    //document.getElementById([i]).style.color = color;
    //=========================
}