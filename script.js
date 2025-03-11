const myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.infoString = `${title} by ${author}, ${pages} pages, ${read ? "already read" : "not read yet"}`;
    this.info = () => this.infoString;
    this.id = crypto.randomUUID();
}

// Adds a book to the library.
function addBookToLibrary(title, author, pages, read)
{
    myLibrary.push(new Book(title, author, pages, read));
}

// Deletes a book from the library with the id passed in.
const deleteBookWithId = (id) =>
{
    let indexOfId = 0;
    for (let i = 0; i < myLibrary.length; i++)
    {
        if (myLibrary.at(i).id === id)
        {
            indexOfId = i;
            break;
        }
    }

    myLibrary.splice(indexOfId, 1);
};


function clearBooks()
{
    const booksContainer = document.querySelector(".book-container");
    const booksContainerTitle = document.querySelector(".container-title");
    // Clear all books (and also the title)
    booksContainer.replaceChildren();
    // Add back the title
    booksContainer.appendChild(booksContainerTitle);
}

function displayBooks()
{
    const booksContainer = document.querySelector(".book-container");
    clearBooks();

    myLibrary.forEach((book) => 
    {
        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book");
        // Set book info
        bookDiv.textContent = book.info();
        bookDiv.setAttribute("data-id", book.id);
        booksContainer.appendChild(bookDiv);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        bookDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () =>
        {
            deleteBookWithId(bookDiv.dataset.id);
            // Redisplay books after deleting it from the library.
            displayBooks();
        });
    });
}

const addBookButton = document.querySelector(".add-book-button");
const addBookFormInputs = document.querySelectorAll(".book-input");

addBookButton.addEventListener("click", (event) => 
{
    const author = addBookFormInputs.item(0).value;
    const title = addBookFormInputs.item(1).value;
    const pagesRead = addBookFormInputs.item(2).value;
    let bookRead = addBookFormInputs.item(3).checked;

    addBookToLibrary(author, title, pagesRead, bookRead);
    // Prevent form from reloading page.
    event.preventDefault();
    displayBooks();
}); 