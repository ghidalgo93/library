function createBookCard(book) {
  const title = book.getTitle();
  const author = book.getAuthor();
  const pages = book.getPages();

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const titleDiv = document.createElement("div");
  titleDiv.textContent = title;
  const authorDiv = document.createElement("div");
  authorDiv.textContent = author;
  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = pages;

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);

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
