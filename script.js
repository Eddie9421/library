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

function addBookToLibrary(title, author, pages, read)
{
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("Bobby", "Bobby Odenkirk", 234, true);
addBookToLibrary("Ramen", "joe Mama", 532, false);

for (const book of myLibrary)
{
    console.log(book.infoString);
}
// crypto.randomUUID()