document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmitForm);

})

const handleSubmitForm = function(event){
  event.preventDefault();

  const newBook = document.createElement('li');
  newBook.classList.add('li');

  const list = document.querySelector('ul');
  list.appendChild(newBook);

  const titleElement = document.createElement('h2');
  titleElement.textContent = `${event.target.title.value}`
  titleElement.classList.add('h2');

  const authorElement = document.createElement('h3');
  authorElement.textContent = `${event.target.author.value}`
  authorElement.classList.add('h3')

  const categoryElement = document.createElement('p');
  categoryElement.textContent = `${event.target.category.value}`
  categoryElement.classList.add('p');


  newBook.appendChild(titleElement);
  newBook.appendChild(authorElement);
  newBook.appendChild(categoryElement);

}

