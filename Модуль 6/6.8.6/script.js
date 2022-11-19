const duplicateField = document.querySelector('#duplicateField');
const textinput = document.querySelector('#textInput');
const form = document.querySelector('#form');

textinput.addEventListener('keypress', (event) => {
    duplicateField.textContent = duplicateField.textContent + event.key;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = '';
    form.reset();
});