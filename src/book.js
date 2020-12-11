const Book = (title, author, pages) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;

  return { getTitle, getAuthor, getPages };
};

export default Book;
