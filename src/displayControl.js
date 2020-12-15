function createBookCard(book) {
<<<<<<< HEAD
  // const title = book.getTitle();
  // const author = book.getAuthor();
  // const pages = book.getPages();

  const title = book.getTitle() ? book.getTitle() : "title";
  const author = book.getAuthor() ? book.getAuthor() : "author";
  const pages = book.getPages() ? book.getPages() : "pages";
  const read = book.getRead() ? book.getRead() : "Not Read";

=======
>>>>>>> a2af2d9795beb7c719c0ffe24eb4220fd86cc565
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const titleDiv = document.createElement("div");
  titleDiv.textContent = book.getTitle();
  const authorDiv = document.createElement("div");
  authorDiv.textContent = book.getAuthor();
  const pagesDiv = document.createElement("div");
<<<<<<< HEAD
  pagesDiv.textContent = pages;
  const readBtn = document.createElement("button");
  readBtn.textContent = read;
=======
  pagesDiv.textContent = book.getPages();
  const readBtn = document.createElement("button");
  readBtn.textContent = book.getRead();
>>>>>>> a2af2d9795beb7c719c0ffe24eb4220fd86cc565
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
