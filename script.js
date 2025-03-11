function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.infoString = `${title} by ${author}, ${pages} pages, ${read ? "already read" : "not read yet"}`;
    this.info = () => this.infoString;
}