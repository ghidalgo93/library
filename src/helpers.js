function addBookToLibrary(book, library) {
  const libraryCpy = [...library];
  libraryCpy.push(book);
  return libraryCpy;
}

export default addBookToLibrary;
