// models/book.ts
export interface IBook {
    id: number;
    title: string;
    author: string;
    category: string;
    available: boolean;
  }
  
  export class Book implements IBook {
    constructor(
      public id: number,
      public title: string,
      public author: string,
      public category: string,
      public available: boolean = true
    ) {}
  }
  