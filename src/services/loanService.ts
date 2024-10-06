// services/loanService.ts
import { Loan, ILoan } from "../model/loan";
import { IBook } from "../model/book";
import { IUser } from "../model/user";

export class LoanService {
  private loans: Map<number, ILoan> = new Map();

  addLoan(loan: ILoan): void {
    this.loans.set(loan.id, loan);
    console.log(`Loan added: Loan ID - ${loan.id}, Book - ${loan.book.title}`);
  }

  removeLoan(loanId: number): void {
    if (this.loans.has(loanId)) {
      this.loans.delete(loanId);
      console.log(`Loan with ID ${loanId} removed.`);
    } else {
      console.log(`Loan with ID ${loanId} does not exist.`);
    }
  }

  listLoans(): ILoan[] {
    return Array.from(this.loans.values());
  }

  findLoanByBook(book: IBook): ILoan | undefined {
    return Array.from(this.loans.values()).find(loan => loan.book.id === book.id);
  }

  findLoanByUser(user: IUser): ILoan[] {
    return Array.from(this.loans.values()).filter(loan => loan.user.id === user.id);
  }
}
