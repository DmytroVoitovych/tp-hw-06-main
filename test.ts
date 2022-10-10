//Задайте правильные ts типы, для классических js;

let age:number = 50;
let nam:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a: number) => { return 100 + a };

console.log(age);

//*******************************************************
// Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: any = -20;
anything = 'Text';
anything = {};

//*******************************************************

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

//*******************************************************

//Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person: [string, number] = ['Max', 21]; //массив с неизменяемыми типами //type tuple

//Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Status { LOADING, READY }; const stat = {status: Status.READY }; if(stat.status === Status.READY){console.log('its true');}

//Сделайте переменную, которая может принимать или строку или число.
let intStr: number | string = 1;  //union type

//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let strTest: 'enable' | 'disable' = 'disable'; //literal type

//*******************************************************

//Укажите типы для следующих функций

function showMessage(message:string):void {
  console.log(message);
}
showMessage('test');

function calc(num1:number, num2:number):number {
  return num1 + num2;
}
calc(2, 4);

function customError():never {
  throw new Error('Error');
}


//******************************************** */
//Создайте свой тип данных на основе имеющихся данных.

type Page1Type = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {createAt: string, updateAt: string,}
}

const page1: Page1Type = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: Page1Type = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log(page1, page2);