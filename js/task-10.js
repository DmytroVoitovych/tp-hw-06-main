function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDiv = document.querySelector('[data-create]');
const destroyAllDiv = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");


const amountInput = () => { // получение значения
  const amount = Number(document.querySelector("#controls input").value);// приводим к числу
  createBoxes(amount); // передаем аргументом
}

 const createBoxes = (amount) => { 
     
     const arrayDiv = [];// массив для хранения полученых дивов
    for (let i = 0; i < amount; i++) { // интератор будет выполнятся пока меньше значения параметра
    const widthHeightSize = 30 + i*10 +'px'; // на каждой интераци прибавляем 10пикселей
        const divNew = document.createElement("div"); // создаем див
        divNew.style.width = widthHeightSize; // ширина
        divNew.style.height = widthHeightSize;// высота
        divNew.style.backgroundColor = getRandomHexColor();// рандомный фон
        arrayDiv.push(divNew); // пушим наш готовый див в массив
    }
    boxes.append(...arrayDiv); // расспыляем наш массив и вставляем в в наш дивбокс
}
 
const destroyBoxes = () => {
    // boxes.removeChild(boxes.childNodes);
    while (boxes.firstChild) {  // получаем первый узел 
    boxes.removeChild(boxes.firstChild);// повторно удаляем пока не останется узлов
}
}
createDiv.addEventListener("click", amountInput);// прибавляем див
destroyAllDiv.addEventListener("click", destroyBoxes);// убираем див