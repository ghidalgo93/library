import "./styles.css";
import Book from "./book";
import addBookToLibrary from "./helpers";
import { displayLibrary } from "./displayControl";

// library container
const libraryContainer = document.getElementById("library-container");
// modal
// const newBookModal = document.getElementById("myModal");
// const newBookBtn = document.getElementById("new-btn");
// const span = document.getElementsByClassName("close")[0];

let myLibrary = [];

const testBook1 = Book("jack", "nook", 222, "read");
const testBook2 = Book();
myLibrary = addBookToLibrary(testBook1, myLibrary);
myLibrary = addBookToLibrary(testBook2, myLibrary);

const testBook1 = Book("jack", "nook", 222, "read");
const testBook2 = Book();
addBookToLibrary(testBook1, myLibrary);
addBookToLibrary(testBook2, myLibrary);

displayLibrary(myLibrary, libraryContainer);

// // When the user clicks on the button, open the modal
// newBookBtn.onclick = () => {
//   newBookModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = () => {
//   newBookModal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = (e) => {
//   if (e.target === newBookModal) {
//     newBookModal.style.display = "none";
//   }
// };
