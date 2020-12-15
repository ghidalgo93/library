const Book = (
  title = "title",
  author = "author",
  pages = 0,
  read = "not read"
) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;

  return { getTitle, getAuthor, getPages, getRead };
};

export default Book;
