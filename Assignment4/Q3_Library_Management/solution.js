// Q3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`"${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`"${this.title}" has been issued.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`"${this.title}" has been returned.`);
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
  new Book("1984", "George Orwell", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book =>
  console.log(`${book.title} by ${book.author} (${book.ISBN})`)
);

function issueBookByISBN(isbn) {
  const book = books.find(item => item.ISBN === isbn);
  if (!book) {
    console.log("Book not found.");
    return;
  }
  book.issueBook();
}

issueBookByISBN("ISBN002");
