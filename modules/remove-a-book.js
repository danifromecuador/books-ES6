const remove = (i) => {
  const array = JSON.parse(localStorage.getItem('booksListArray')) || [];
  array.splice(i, 1);
  localStorage.setItem('booksListArray', JSON.stringify(array));
};

export default remove;