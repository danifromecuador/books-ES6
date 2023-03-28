import {
  navList, navAdd, navContact, addButton,
} from './modules/html-const-variables.js';
import { goToListSection, goToAddSection, goToContactSection } from './modules/navigation.js';
import add from './modules/add-a-book.js';
import render from './modules/render.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
// FIRST RENDER WHEN THE PAGE LOADS //////////////////////////////////////////////////
render();

// NAVIGATION USING NAV BAR //////////////////////////////////////////////////////////
navList.addEventListener('click', () => {
  goToListSection();
  render();
});

navAdd.addEventListener('click', () => {
  goToAddSection();
});

navContact.addEventListener('click', () => {
  goToContactSection();
});

// ADD A NEW BOOK //////////////////////////////////////////////////////////////////
addButton.addEventListener('click', () => {
  add();
  render();
});

// SHOWING THE CURRENT DATE ///////////////////////////////////////////////////////
const date = DateTime.local();
const formattedDate = date.toFormat('yyyy-MM-dd');
document.getElementById('current-time').textContent = formattedDate;
