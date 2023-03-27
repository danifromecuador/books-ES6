import { newTitle, newAuthor, addButton } from './html-const-variables.js';

const arr = [];
const add = () => {
  addButton.addEventListener('click', () => {
    arr.push({ title: newTitle.value, author: newAuthor.value });
    localStorage.setItem('booksListArray', JSON.stringify(arr));
    // console.log(arr);
  });
};

export default add;