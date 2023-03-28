import {
  navList, navAdd, navContact, addButton,
} from './modules/html-const-variables.js';
import { goToListSection, goToAddSection, goToContactSection } from './modules/navigation.js';
import add from './modules/add-a-book.js';
import render from './modules/render.js';

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
