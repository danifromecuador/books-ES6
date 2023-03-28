import { newTitle, newAuthor, alertMessage } from './html-const-variables.js';

const add = () => {
  const array = JSON.parse(localStorage.getItem('booksListArray')) || [];
  let repeatedBook = false;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].title === newTitle.value && array[i].author === newAuthor.value) {
      alertMessage.innerHTML = 'This book is already added!';
      repeatedBook = true;
    }
  }

  newTitle.addEventListener('click', () => {
    newTitle.value = '';
    alertMessage.innerHTML = '';
  });

  newAuthor.addEventListener('click', () => {
    newAuthor.value = '';
    alertMessage.innerHTML = '';
  });

  if (newTitle.value !== '' && newTitle.value !== '' && repeatedBook === false) {
    array.push({ title: newTitle.value, author: newAuthor.value });
    localStorage.setItem('booksListArray', JSON.stringify(array));
    newTitle.value = '';
    newAuthor.value = '';
    alertMessage.innerHTML = '';
  }
};

export default add;