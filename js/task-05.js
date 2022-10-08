const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const stringValueInput = (event) =>
    event.currentTarget.value !== "" ?
    nameOutput.textContent = event.currentTarget.value :
    nameOutput.textContent = "Anonymous";

nameInput.addEventListener('input', stringValueInput);