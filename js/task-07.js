const inputSlider = document.querySelector('#font-size-control');
const textForInput = document.querySelector('#text');

const fontSizeChange = event => textForInput.style.fontSize = event.currentTarget.value + 'px';

inputSlider.addEventListener('input', fontSizeChange);