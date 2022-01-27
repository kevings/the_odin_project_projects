// to do list:
// if 0 is first number, don't show it
// if user divides by 0, do something

let displayValue = 0;
let oldValue = 0;
let newValue = 0;
let firstOperator = "";
let secondOperator = "";

let needNewValue = true;
let canCompute = false;

const display = document.getElementById('display');

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const operateBtn = document.getElementById('operate');
const clearBtn = document.getElementById('clear');

numberBtn.forEach(button => button.addEventListener('click', addNumberToDisplay));
operatorBtn.forEach(button => button.addEventListener('click', storeOperator));
operateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);

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
    if(firstOperator && oldValue && canCompute){
        console.log("have an operator already");
        secondOperator = this.id;
        calculate();
    } else {
        firstOperator = this.id;
    }
    needNewValue = true;
    oldValue = displayValue;
}

function calculate(){
    if(canCompute && firstOperator){
        if(firstOperator === "divide" && newValue === 0){
            display.textContent = "lol";
        }
        else {
            newValue = displayValue;
            oldValue = operate(firstOperator, oldValue, newValue);
            display.textContent = oldValue;
            displayValue = oldValue;
            if(secondOperator) {
                firstOperator = secondOperator;
                secondOperator = "";
            }
        }
    }
    needNewValue = true;   
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

function operate(op,a,b){
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
    firstOperator = "";
    secondOperator = "";
}