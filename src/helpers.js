import Book from "./book";

function stringifyLibrary(library) {
  let x = [];
  library.forEach((book) => {
    x.push(book.obj());
  });
  x = JSON.stringify(x);
  return x;
}

function addBookToLibrary(book, library) {
  const libraryCpy = [...library];
  libraryCpy.push(book);
  return libraryCpy;
}

function removeBookFromLibrary(bookIndex, library) {
  const libraryCpy = [...library];
  libraryCpy.splice(bookIndex, 1);
  return libraryCpy;
}

function verifyInputs(inputs) {
  if (inputs.title.value === "") {
    return false;
  }
  if (inputs.author.value === "") {
    return false;
  }
  if (inputs.pages.value === "") {
    return false;
  }
  return true;
}

function parseLibrary(library) {
  const x = JSON.parse(library);
  let y = [];
  x.forEach((book) => {
    const newBook = Book(book.title, book.author, book.pages, book.read);
    y = addBookToLibrary(newBook, y);
  });
  return y;
}

export {
  parseLibrary,
  stringifyLibrary,
  removeBookFromLibrary,
  addBookToLibrary,
  verifyInputs,
};
