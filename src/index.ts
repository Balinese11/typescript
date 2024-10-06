// index.ts
import { LibraryService } from "./services/libraryService";
import { LoanService } from "./services/loanService";
import { Book } from "./model/book";
import { User } from "./model/user";
import { Loan } from "./model/loan";

const libraryService = new LibraryService();
const loanService = new LoanService();

const book1 = new Book(1, "The Hobbit", "J.R.R. Tolkien", "Fantasy");
const book2 = new Book(2, "1983", "Return of the Jedi", "Science-fiction");

const user1 = new User(1, "John Doe", "john.doe@example.com");
const user2 = new User(2, "Luke Skywalket", "luke.skywalker@example.com");

libraryService.addBook(book1);
libraryService.addBook(book2);

libraryService.borrowBook(book1.id, user1);
const loan1 = new Loan(1, book1, user1, new Date());
loanService.addLoan(loan1);

libraryService.borrowBook(book2.id, user2);
const loan2 = new Loan(1, book1, user1, new Date());
loanService.addLoan(loan2);

// Listázzuk a könyveket és kölcsönzéseket
console.log("Available Books:", libraryService.listAvailableBooks());
console.log("All Loans:", loanService.listLoans());

// Visszavesszük a könyvet
libraryService.returnBook(loan2.id);
console.log("Available Books after return:", libraryService.listAvailableBooks());
