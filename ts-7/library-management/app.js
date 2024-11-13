// Enum for Book Genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["Fantasy"] = "Fantasy";
})(Genre || (Genre = {}));
// Library class that implements the Library interface
var LibraryInventory = /** @class */ (function () {
    function LibraryInventory(initialBooks) {
        this.inventory = [];
        this.inventory = initialBooks;
    }
    // Add a new book to the inventory
    LibraryInventory.prototype.addBook = function (book) {
        this.inventory.push(book);
    };
    // Search for a book by title
    LibraryInventory.prototype.searchBookByTitle = function (title) {
        return this.inventory.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
    };
    // Search for books by author
    LibraryInventory.prototype.searchBookByAuthor = function (author) {
        return this.inventory.filter(function (book) { return book.author.toLowerCase() === author.toLowerCase(); });
    };
    // Search for books by genre
    LibraryInventory.prototype.searchBookByGenre = function (genre) {
        return this.inventory.filter(function (book) { return book.genre === genre; });
    };
    // Update the quantity of a specific book
    LibraryInventory.prototype.updateQuantity = function (id, newQuantity) {
        var book = this.inventory.find(function (book) { return book.id === id; });
        if (book) {
            book.quantity = newQuantity;
        }
        else {
            console.log("Book not found.");
        }
    };
    // Display the inventory
    LibraryInventory.prototype.displayInventory = function () {
        console.log("Library Inventory:");
        this.inventory.forEach(function (book) {
            console.log("ID: ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Quantity: ").concat(book.quantity, ", Format: ").concat(book.format));
        });
    };
    return LibraryInventory;
}());
// Initialize the library with predefined books
var library = new LibraryInventory([
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: Genre.Fiction,
        quantity: 10,
        format: "Paperback"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: Genre.Fiction,
        quantity: 8,
        format: "Hardcover"
    },
    {
        id: 3,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: Genre.Fiction,
        quantity: 5,
        format: "Ebook"
    }
]);
// Test the library management functionalities
// Display the initial inventory
library.displayInventory();
// Search for a book by title
var searchedBook = library.searchBookByTitle("1984");
if (searchedBook) {
    console.log("Found Book: ".concat(searchedBook.title));
}
else {
    console.log("Book not found.");
}
// Search for books by genre
var fictionBooks = library.searchBookByGenre(Genre.Fiction);
console.log("Fiction Books:", fictionBooks.map(function (book) { return book.title; }));
// Update the quantity of a book
library.updateQuantity(2, 15);
library.displayInventory();
