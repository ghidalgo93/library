import { createBookCard } from "../src/displayControl";
import Book from "../src/book";

describe("test functionality of display controllers", () => {
  let testBook;
  let testLibrary;
  beforeEach(function () {
    testBook = Book("harry potter", "jk rawling", "666", true);
    testLibrary = [];
  });
  it("toggle read should change read status", () => {
    expect(testBook.getRead()).toBe(true);
    testBook.toggleRead();
    expect(testBook.getRead()).toBe(false);
    testBook.toggleRead();
    expect(testBook.getRead()).toBe(true);
  });
});
