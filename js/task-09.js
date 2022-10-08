function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const colorRandom = document.querySelector('.change-color');
const backgroundColorBody = document.querySelector('body');

const bodyChangeColor = () => {
    backgroundColorBody.style.backgroundColor = getRandomHexColor();
     return color.textContent = backgroundColorBody.style.backgroundColor;
};

colorRandom.addEventListener('click', bodyChangeColor);