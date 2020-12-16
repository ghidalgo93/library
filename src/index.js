import "./styles.css";
import Book from "./book";
import {
  removeBookFromLibrary,
  verifyInputs,
  addBookToLibrary,
} from "./helpers";
import { displayLibrary } from "./displayControl";

let myLibrary = [];

// library container
const libraryContainer = document.getElementById("library-container");

// form
const newBookForm = document.getElementById("new-form");

// modal (ie popup)
const newBookModal = document.getElementById("new-modal");
const newBookBtn = document.getElementById("new-btn");
const span = document.getElementsByClassName("close")[0];

// add-book
const addBtn = document.getElementById("add-btn");
addBtn.onclick = (e) => {
  e.preventDefault();
  const inputs = e.target.form.elements;

  if (verifyInputs(inputs)) {
    newBookModal.style.display = "none";
    const newBook = Book(
      inputs.title.value,
      inputs.author.value,
      inputs.pages.value,
      inputs.read.checked
    );
    myLibrary = addBookToLibrary(newBook, myLibrary);
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

// When the user clicks on the button, open the modal
newBookBtn.onclick = () => {
  newBookModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  newBookModal.style.display = "none";
  newBookForm.reset();
};
