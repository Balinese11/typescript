// tests/library.test.ts
import { LibraryService } from "../services/libraryService";
import { Book } from "../model/book";

describe("LibraryService", () => {
  let libraryService: LibraryService;

  beforeEach(() => {
    libraryService = new LibraryService();
  });

  it("should add a book to the library", () => {
    const book = new Book(1, "Clean Code", "Robert C. Martin", "Programming");
    libraryService.addBook(book);
    expect(libraryService.listAvailableBooks().length).toBe(1);
  });
});
