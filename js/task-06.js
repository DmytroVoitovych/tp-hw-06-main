const inputOfChek = document.querySelector('#validation-input');

const chekLengthInput = (event) => {
    if (event.currentTarget.value.length >= 6) {
        inputOfChek.classList.remove('invalid');
        return inputOfChek.classList.add('valid');
    }
    inputOfChek.classList.remove('valid');
    return inputOfChek.classList.add('invalid');
};

inputOfChek.addEventListener('blur', chekLengthInput);