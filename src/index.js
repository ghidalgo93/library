import "./styles.css";
import Book from "./book";
import {
  removeBookFromLibrary,
  verifyInputs,
  addBookToLibrary,
} from "./helpers";
import { displayLibrary } from "./displayControl";

let myLibrary = [];

const libraryContainer = document.getElementById("library-container");
const newBookModal = document.getElementById("new-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const newBookForm = document.getElementById("new-form");
const newBookBtn = document.getElementById("new-btn");
const addBtn = document.getElementById("add-btn");

addBtn.onclick = (e) => {
  e.preventDefault();
  const inputs = e.target.form.elements;
  if (verifyInputs(inputs)) {
    const newBook = Book(
      inputs.title.value,
      inputs.author.value,
      inputs.pages.value,
      inputs.read.checked
    );
    myLibrary = addBookToLibrary(newBook, myLibrary);
    newBookModal.style.display = "none";
    newBookForm.reset();
    displayLibrary(myLibrary, libraryContainer);
  }
  // else, give 'required' styles of some kind
};
libraryContainer.addEventListener("click", function (e) {
  if (e.target && e.target.className === "remove-btn") {
    myLibrary = removeBookFromLibrary(e.target.dataset.index, myLibrary);
    displayLibrary(myLibrary, libraryContainer);
  } else if (e.target && e.target.className === "read-btn") {
    myLibrary[e.target.dataset.index].toggleRead();
    displayLibrary(myLibrary, libraryContainer);
  }
});
newBookBtn.onclick = () => {
  newBookModal.style.display = "block";
};
closeBtn.onclick = () => {
  newBookModal.style.display = "none";
  newBookForm.reset();
};
