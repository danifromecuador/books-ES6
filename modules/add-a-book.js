import { newTitle, newAuthor, addButton } from "/modules/html-const-variables.js";

let arr = [];
const add = () => {
  addButton.addEventListener("click", () => {    
    arr.push({title: newTitle.value, author: newAuthor.value})
    localStorage.setItem("booksListArray", JSON.stringify(arr));
    console.log(arr);
  });
};

export {add};