// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createBookCard(book, indexOfBook) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const titleDiv = document.createElement("div");
  titleDiv.textContent = book.getTitle();
  const authorDiv = document.createElement("div");
  authorDiv.textContent = book.getAuthor();
  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = `${book.getPages()} pages`;
  const readBtn = document.createElement("button");
  readBtn.classList.add("read-btn");
  readBtn.dataset.index = indexOfBook;
  readBtn.textContent = book.getRead() ? "Read" : "Not Read";
  readBtn.style.backgroundColor = book.getRead() ? "#66997e" : "#996668";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.dataset.index = indexOfBook;

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readBtn);
  bookDiv.appendChild(removeBtn);

  return bookDiv;
}

function displayLibrary(library, parentNode) {
  // err handling
  removeAllChildNodes(parentNode);
  library.forEach((book, index) => {
    const bookCard = createBookCard(book, index);
    parentNode.appendChild(bookCard);
  });
}

export { createBookCard, displayLibrary };
