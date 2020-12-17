const Book = (title, author, pages, read) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;
  const toggleRead = () => (read = !read);

  const obj = () => {
    return { title, author, pages, read };
  };

  return { getTitle, getAuthor, getPages, getRead, toggleRead, obj };
};

export default Book;
