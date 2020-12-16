const Book = (title, author, pages, read) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;
  const toggleRead = () => (read = !read);

  return { getTitle, getAuthor, getPages, getRead, toggleRead };
};

export default Book;
