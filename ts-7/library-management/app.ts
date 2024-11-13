// Enum for Book Genres
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    Fantasy = "Fantasy"
  }
  
  // Union type for Book Formats
  type BookFormat = "Paperback" | "Hardcover" | "Ebook";
  
  // Interface for Book Structure
  interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
  }
  
  // Intersection type for Library Book combining Book and BookFormat
  type LibraryBook = Book & { format: BookFormat };
  
  // Interface for Library to manage the collection of books
  interface Library {
    inventory: LibraryBook[];
    addBook(book: LibraryBook): void;
    searchBookByTitle(title: string): LibraryBook | undefined;
    searchBookByAuthor(author: string): LibraryBook[];
    searchBookByGenre(genre: Genre): LibraryBook[];
    updateQuantity(id: number, newQuantity: number): void;
  }
  
  // Library class that implements the Library interface
  class LibraryInventory implements Library {
    inventory: LibraryBook[] = [];
  
    constructor(initialBooks: LibraryBook[]) {
      this.inventory = initialBooks;
    }
  
    // Add a new book to the inventory
    addBook(book: LibraryBook): void {
      this.inventory.push(book);
    }
  
    // Search for a book by title
    searchBookByTitle(title: string): LibraryBook | undefined {
      return this.inventory.find(book => book.title.toLowerCase() === title.toLowerCase());
    }
  
    // Search for books by author
    searchBookByAuthor(author: string): LibraryBook[] {
      return this.inventory.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }
  
    // Search for books by genre
    searchBookByGenre(genre: Genre): LibraryBook[] {
      return this.inventory.filter(book => book.genre === genre);
    }
  
    // Update the quantity of a specific book
    updateQuantity(id: number, newQuantity: number): void {
      const book = this.inventory.find(book => book.id === id);
      if (book) {
        book.quantity = newQuantity;
      } else {
        console.log("Book not found.");
      }
    }
  
    // Display the inventory
    displayInventory(): void {
      console.log("Library Inventory:");
      this.inventory.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`);
      });
    }
  }
  
  // Initialize the library with predefined books
  const library = new LibraryInventory([
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
  const searchedBook = library.searchBookByTitle("1984");
  if (searchedBook) {
    console.log(`Found Book: ${searchedBook.title}`);
  } else {
    console.log("Book not found.");
  }
  
  // Search for books by genre
  const fictionBooks = library.searchBookByGenre(Genre.Fiction);
  console.log("Fiction Books:", fictionBooks.map(book => book.title));
  
  // Update the quantity of a book
  library.updateQuantity(2, 15);
  library.displayInventory();
  