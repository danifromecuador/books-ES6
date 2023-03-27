import { addedBooks, addButton } from "/modules/html-const-variables.js";

let html = `hola pendejo
`;


const showList = () => {
    addButton.addEventListener("click", () => {
        addedBooks.innerHTML = html;
    });
};

export { showList };