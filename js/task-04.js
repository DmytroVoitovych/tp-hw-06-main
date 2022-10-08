let counterValues = 0;
console.log(counterValues);
const counterPlus = () => {counterValues+=1; return document.querySelector('#value').textContent = counterValues;};
const incrementBut = document.querySelector('button[data-action="increment"]');

const counterMinus = () => {counterValues-=1; return document.querySelector('#value').textContent = counterValues;};
const decrementBut = document.querySelector('button[data-action="decrement"]');

const onclickUp = incrementBut.addEventListener('click', counterPlus);
const onclickDown = decrementBut.addEventListener('click', counterMinus);