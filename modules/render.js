import { addedBooks, addButton } from './html-const-variables.js';

const html = `hola pendejo
`;

const showList = () => {
  addButton.addEventListener('click', () => {
    addedBooks.innerHTML = html;
  });
};

export default showList;