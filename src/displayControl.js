function createBookCard(book) {
  // const title = book.getTitle();
  // const author = book.getAuthor();
  // const pages = book.getPages();

  const title = book.getTitle() ? book.getTitle() : "title";
  const author = book.getAuthor() ? book.getAuthor() : "author";
  const pages = book.getPages() ? book.getPages() : "pages";
  const read = book.getRead() ? book.getRead() : "Not Read";

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const titleDiv = document.createElement("div");
  titleDiv.textContent = title;
  const authorDiv = document.createElement("div");
  authorDiv.textContent = author;
  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = pages;
  const readBtn = document.createElement("button");
  readBtn.textContent = read;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readBtn);
  bookDiv.appendChild(removeBtn);

  return bookDiv;
}

function displayLibrary(library, parentNode) {
  // err handling
  library.forEach((book) => {
    const bookCard = createBookCard(book);
    parentNode.appendChild(bookCard);
  });
}

export { createBookCard, displayLibrary };
