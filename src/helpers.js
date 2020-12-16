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

export { removeBookFromLibrary, addBookToLibrary, verifyInputs };
