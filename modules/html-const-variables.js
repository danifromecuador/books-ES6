const addedBooks = document.querySelector('.added-books'); // In this div the html wil be created dinamically
const addButton = document.querySelector('.add-button');
const newTitle = document.querySelector('.add-title'); // User input
const newAuthor = document.querySelector('.add-author'); // User input
const alertMessage = document.querySelector('.alert-message');
const navList = document.querySelector('.nav-list');
const navAdd = document.querySelector('.nav-add');
const navContact = document.querySelector('.nav-contact');
const listSection = document.querySelector('.list');
const addANewSection = document.querySelector('.add-a-new-book');
const contactSection = document.querySelector('.contact');

export {
  addedBooks, addButton, newTitle, newAuthor, alertMessage, navList, navAdd, navContact,
  listSection, addANewSection, contactSection,
};