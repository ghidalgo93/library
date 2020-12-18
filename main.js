/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/book.js":
/*!*********************!*
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Book = function Book(title, author, pages, read) {
  var getTitle = function getTitle() {
    return title;
  };

  var getAuthor = function getAuthor() {
    return author;
  };

  var getPages = function getPages() {
    return pages;
  };

  var getRead = function getRead() {
    return read;
  };

  var toggleRead = function toggleRead() {
    return read = !read;
  };

  var obj = function obj() {
    return {
      title: title,
      author: author,
      pages: pages,
      read: read
    };
  };

  return {
    getTitle: getTitle,
    getAuthor: getAuthor,
    getPages: getPages,
    getRead: getRead,
    toggleRead: toggleRead,
    obj: obj
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);

/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBookCard": () => /* binding */ createBookCard,
/* harmony export */   "displayLibrary": () => /* binding */ displayLibrary
/* harmony export */ });
// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createBookCard(book, indexOfBook) {
  var bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  var titleDiv = document.createElement("div");
  titleDiv.textContent = book.getTitle();
  var authorDiv = document.createElement("div");
  authorDiv.textContent = book.getAuthor();
  var pagesDiv = document.createElement("div");
  pagesDiv.textContent = "".concat(book.getPages(), " pages");
  var readBtn = document.createElement("button");
  readBtn.classList.add("read-btn");
  readBtn.dataset.index = indexOfBook;
  readBtn.textContent = book.getRead() ? "Read" : "Not Read";
  readBtn.style.backgroundColor = book.getRead() ? "#66997e" : "#996668";
  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.dataset.index = indexOfBook;
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readBtn);
  bookDiv.appendChild(removeBtn);
  return bookDiv;
}

function displayLibrary(library, parentNode) {
  // err handling
  removeAllChildNodes(parentNode);
  library.forEach(function (book, index) {
    var bookCard = createBookCard(book, index);
    parentNode.appendChild(bookCard);
  });
}



/***/ }),

/***/ "./src/helpers.js":
/*!************************!*
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseLibrary": () => /* binding */ parseLibrary,
/* harmony export */   "stringifyLibrary": () => /* binding */ stringifyLibrary,
/* harmony export */   "removeBookFromLibrary": () => /* binding */ removeBookFromLibrary,
/* harmony export */   "addBookToLibrary": () => /* binding */ addBookToLibrary,
/* harmony export */   "verifyInputs": () => /* binding */ verifyInputs
/* harmony export */ });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/book.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function stringifyLibrary(library) {
  var x = [];
  library.forEach(function (book) {
    x.push(book.obj());
  });
  x = JSON.stringify(x);
  return x;
}

function addBookToLibrary(book, library) {
  var libraryCpy = _toConsumableArray(library);

  libraryCpy.push(book);
  return libraryCpy;
}

function removeBookFromLibrary(bookIndex, library) {
  var libraryCpy = _toConsumableArray(library);

  libraryCpy.splice(bookIndex, 1);
  return libraryCpy;
}

function verifyInputs(inputs) {
  if (inputs.title.value === "") {
    return false;
  }

  if (inputs.author.value === "") {
    return false;
  }

  if (inputs.pages.value === "") {
    return false;
  }

  return true;
}

function parseLibrary(library) {
  var x = JSON.parse(library);
  var y = [];
  x.forEach(function (book) {
    var newBook = (0,_book__WEBPACK_IMPORTED_MODULE_0__.default)(book.title, book.author, book.pages, book.read);
    y = addBookToLibrary(newBook, y);
  });
  return y;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayControl */ "./src/displayControl.js");




var myLibrary = []; // dom elements

var libraryContainer = document.getElementById("library-container");
var newBookModal = document.getElementById("new-modal");
var closeBtn = document.getElementsByClassName("close")[0];
var newBookForm = document.getElementById("new-form");
var newBookBtn = document.getElementById("new-btn");
var addBtn = document.getElementById("add-btn");

function setLibrary() {
  var parsedLibrary = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.parseLibrary)(localStorage.getItem("library"));
  myLibrary = parsedLibrary;
}

function populateStorage() {
  var stringifiedLibrary = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.stringifyLibrary)(myLibrary);
  localStorage.setItem("library", stringifiedLibrary);
  setLibrary();
}

if (!localStorage.getItem("library")) {
  populateStorage();
} else {
  setLibrary();
  (0,_displayControl__WEBPACK_IMPORTED_MODULE_3__.displayLibrary)(myLibrary, libraryContainer);
} // events


addBtn.onclick = function (e) {
  e.preventDefault();
  var inputs = e.target.form.elements;

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.verifyInputs)(inputs)) {
    var newBook = (0,_book__WEBPACK_IMPORTED_MODULE_1__.default)(inputs.title.value, inputs.author.value, inputs.pages.value, inputs.read.checked);
    myLibrary = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.addBookToLibrary)(newBook, myLibrary);
    populateStorage();
    newBookModal.style.display = "none";
    newBookForm.reset();
    (0,_displayControl__WEBPACK_IMPORTED_MODULE_3__.displayLibrary)(myLibrary, libraryContainer);
  } // TODO else, give 'required' styles of some kind

};

libraryContainer.addEventListener("click", function (e) {
  if (e.target && e.target.className === "remove-btn") {
    myLibrary = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.removeBookFromLibrary)(e.target.dataset.index, myLibrary);
    populateStorage();
    (0,_displayControl__WEBPACK_IMPORTED_MODULE_3__.displayLibrary)(myLibrary, libraryContainer);
  } else if (e.target && e.target.className === "read-btn") {
    myLibrary[e.target.dataset.index].toggleRead();
    populateStorage();
    (0,_displayControl__WEBPACK_IMPORTED_MODULE_3__.displayLibrary)(myLibrary, libraryContainer);
  }
});

newBookBtn.onclick = function () {
  newBookModal.style.display = "block";
};

closeBtn.onclick = function () {
  newBookModal.style.display = "none";
  newBookForm.reset();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #669997;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n  font-size: 80px;\n}\n\nbutton {\n  width: 200px;\n  height: 50px;\n  font-size: 25px;\n  border-radius: 10px;\n  border: solid 3px black;\n  background-color: #66997e;\n}\nbutton:hover {\n  background-color: #668199;\n}\n\n#new-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#library-container {\n  display: flex;\n  flex-flow: row wrap;\n  height: 25%;\n}\n\n.book {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #668199;\n  font-size: 25px;\n  border-radius: 10px;\n  border: solid 3px black;\n  margin: 20px;\n  padding: 10px;\n  height: 100%;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  flex-flow: column;\n  background-color: #668199;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  width: 20%;\n  height: 40%;\n  border-radius: 10px;\n  border: solid 3px black;\n  align-items: center;\n  font-size: 25px;\n}\n\nform {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n  justify-content: space-around;\n}\n\n.text-input {\n  border-radius: 10px;\n  border: solid 3px black;\n  height: 50px;\n  font-size: 25px;\n  width: 80%;\n  background-color: #66997e;\n}\n\n#add-btn {\n  width: 70%;\n  align-self: center;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n  align-self: flex-end;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["body {\n  background-color: #669997;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n  font-size: 80px;\n}\n\nbutton {\n  width: 200px;\n  height: 50px;\n  font-size: 25px;\n  border-radius: 10px;\n  border: solid 3px black;\n  background-color: #66997e;\n}\nbutton:hover {\n  background-color: #668199;\n}\n\n#new-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#library-container {\n  display: flex;\n  flex-flow: row wrap;\n  height: 25%;\n}\n\n.book {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #668199;\n  font-size: 25px;\n  border-radius: 10px;\n  border: solid 3px black;\n  margin: 20px;\n  padding: 10px;\n  height: 100%;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  flex-flow: column;\n  background-color: #668199;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  width: 20%;\n  height: 40%;\n  border-radius: 10px;\n  border: solid 3px black;\n  align-items: center;\n  font-size: 25px;\n}\n\nform {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n  justify-content: space-around;\n}\n\n.text-input {\n  border-radius: 10px;\n  border: solid 3px black;\n  height: 50px;\n  font-size: 25px;\n  width: 80%;\n  background-color: #66997e;\n}\n\n#add-btn {\n  width: 70%;\n  align-self: center;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n  align-self: flex-end;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map