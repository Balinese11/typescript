// services/libraryService.ts
import { Book, IBook } from "../model/book";
import { Loan, ILoan } from "../model/loan";
import { User, IUser } from "../model/user";

export class LibraryService {
  private books: IBook[] = [];
  private loans: ILoan[] = [];

  addBook(book: IBook): void {
    this.books.push(book);
  }

  removeBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  listAvailableBooks(): IBook[] {
    return this.books.filter(book => book.available);
  }

  borrowBook(bookId: number, user: IUser): void {
    const book = this.books.find(book => book.id === bookId && book.available);
    if (book) {
      book.available = false;
      const loan = new Loan(this.loans.length + 1, book, user, new Date());
      this.loans.push(loan);
    }
  }

  returnBook(loanId: number): void {
    const loan = this.loans.find(loan => loan.id === loanId);
    if (loan && !loan.returned) {
      loan.returned = true;
      loan.book.available = true;
    }
  }
}
