const Book = (title, author, pages, read) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;

  return { getTitle, getAuthor, getPages, getRead };
};

export default Book;
