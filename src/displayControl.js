function createBookCard(book) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const titleDiv = document.createElement("div");
  titleDiv.textContent = book.getTitle();
  const authorDiv = document.createElement("div");
  authorDiv.textContent = book.getAuthor();
  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = book.getPages();
  const readBtn = document.createElement("button");
  readBtn.textContent = book.getRead();
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
