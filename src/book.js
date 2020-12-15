<<<<<<< HEAD
const Book = (title, author, pages, read) => {
=======
const Book = (
  title = "title",
  author = "author",
  pages = 0,
  read = "not read"
) => {
>>>>>>> a2af2d9795beb7c719c0ffe24eb4220fd86cc565
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;

  return { getTitle, getAuthor, getPages, getRead };
};

export default Book;
