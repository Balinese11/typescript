// models/loan.ts
import { IUser } from "./user";
import { IBook } from "./book";

export interface ILoan {
  id: number;
  book: IBook;
  user: IUser;
  dueDate: Date;
  returned: boolean;
}

export class Loan implements ILoan {
  constructor(
    public id: number,
    public book: IBook,
    public user: IUser,
    public dueDate: Date,
    public returned: boolean = false
  ) {}
}
