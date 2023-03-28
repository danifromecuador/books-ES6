import { addedBooks } from './html-const-variables.js';
import remove from './remove-a-book.js';

const render = () => {
  const array = JSON.parse(localStorage.getItem('booksListArray')) || [];
  addedBooks.innerHTML = '';

  for (let i = 0; i < array.length; i += 1) {
    const html = `
      <div class="book">
        <div class="book-details">
          <div class="title">"${array[i].title}" by&nbsp;</div>
          <div class="author"> ${array[i].author}</div>
        </div>
        <div class="remove-container">
          <button class="remove-book">Remove</button>
        </div>
      </div>
    `;
    addedBooks.innerHTML += html;
  }

  const removeButtonArray = document.querySelectorAll('.remove-book');
  for (let i = 0; i < removeButtonArray.length; i += 1) {
    removeButtonArray[i].addEventListener('click', () => {
      remove(i);
      render();
    });
  }
};

export default render;