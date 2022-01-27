// to do list:
// if 0 is first number, don't show it
// if user divides by 0, do something
// make second operand so it doesn't get confused

const DEFAULT_VALUE = 0;

let displayValue = 0;

let oldValue = 0;
let newValue = 0;
let operand = "";

let needNewValue = false;
let canCompute = true;

const display = document.getElementById('display');

const numberBtn = document.querySelectorAll('.number');
const operandBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('operate');
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', clear);

numberBtn.forEach(button => button.addEventListener('click', addNumberToDisplay));
operandBtn.forEach(button => button.addEventListener('click', storeOperator));
equalsBtn.addEventListener('click', calculate);

function addNumberToDisplay(){
    let currentBtn = this.textContent;
    canCompute = true;
    if(needNewValue){
        display.textContent = currentBtn;
        displayValue = parseInt(display.textContent);
        needNewValue = false;
    } else {
        let newDisplay = display.textContent.concat(currentBtn);
        display.textContent = newDisplay;
        displayValue = parseInt(display.textContent);
    }
}

function storeOperator(){
    operand = this.id;
    needNewValue = true;
    if (oldValue && canCompute){
        calculate();
    }
    oldValue = displayValue;
}

function calculate(){
        newValue = displayValue;
        oldValue = operator(operand, oldValue, newValue);
        display.textContent = oldValue;
        displayValue = oldValue;
        console.log("oldValue " + oldValue);
        console.log("newValue " + newValue);
        console.log("displayValue " + displayValue);
        canCompute = false;
}

function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operator(op,a,b){
    if(canCompute){
        if(op === 'add'){
            return add(a,b);
        }
        if(op === 'subtract'){
            return subtract(a,b);
        }
        if(op === 'multiply'){
            return multiply(a,b);
        }
        if(op === 'divide'){
            return divide(a,b);
        }
    }
}

function clear(){
    display.textContent = ' ';
    oldValue = null;
    newValue = null;
    displayValue = null;
    operand = "";
}