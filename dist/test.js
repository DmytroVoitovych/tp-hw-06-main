"use strict";
let age = 50;
let nam = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
console.log(age);
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const stat = { status: Status.READY };
if (stat.status === Status.READY) {
    console.log('its true');
}
let intStr = 1;
let strTest = 'disable';
function showMessage(message) {
    console.log(message);
}
showMessage('test');
function calc(num1, num2) {
    return num1 + num2;
}
calc(2, 4);
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page1, page2);
//# sourceMappingURL=test.js.map