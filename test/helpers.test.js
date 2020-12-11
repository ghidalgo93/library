import Book from "../src/book";
import addBookToLibrary from "../src/helpers";

describe("functionality of helper functions", () => {
  let testBook;
  let testLibrary;
  beforeEach(function () {
    testBook = Book("harry potter", "jk rawling", "666");
    testLibrary = [];
  });

  it("addBookToLibrary should add a single book to library provided", () => {
    expect(addBookToLibrary(testBook, testLibrary).length).toBe(1);
    expect(addBookToLibrary(testBook, testLibrary)[0]).toBe(testBook);
  });
});
