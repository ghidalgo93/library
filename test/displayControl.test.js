import { createBookCard } from "../src/displayControl";
import Book from "../src/book";

describe("test functionality of display controllers", () => {
  let testBook;
  let testLibrary;
  beforeEach(function () {
    testBook = Book("harry potter", "jk rawling", "666");
    testLibrary = [];
  });

  it("createBookCard should return an html node", () => {
    console.log(createBookCard(testBook).nodeType);
    expect(createBookCard(testBook).nodeType).toBe(Element);
  });
});
