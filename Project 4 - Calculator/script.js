// Functions for operations

const add = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const multiply = (a, b) => +a * +b;
const divide = (a, b) => +a / +b;

function operate (operator, a, b) {
    if(operator === `+`) return add(a, b);
    else if(operator === `-`) return subtract(a, b);
    else if(operator === `×`) return multiply(a, b);
    else if(operator === `÷`) return divide(a, b);
    else return a;
}

function result (operator, a, b) {
    displayUpper.innerText = `${a} ${operator} ${b} =`;
    
    let output = operate(operator, a, b);
    output = +parseFloat(output).toFixed(7);  // Max 7 decimals
    if (output.toString().length > 9) output = output.toString().slice(0, 9);  // Max 9 characters
    
    displayLower.innerText = output;
    a = output;
}

function numberInput () {
    this.classList.toggle('clicking');
    if (this.innerText === `=`) {
        number = ``;
        return result(operator, a, b);
    }
    if (displayLower.innerText === `0`) displayLower.innerText = ``;
    if (displayLower.innerText.length < 9) number += this.innerText;  // Max 9 characters
}

function operatorInput () {
    this.classList.toggle('clicking');
    operator = this.innerText;
    if (a === ``) {
        a = number;
        number = ``;
    } else {
        b = number;
    }
}

function clear () {
    this.classList.toggle('clicking');
    displayLower.innerText = `0`;
    displayUpper.innerText = `ㅤ`;
    number = ``
    a = ``;
    b = ``;
    operator = ``;
}

// Function for removing clicking transition

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}

// Functions for creating buttons inside divs

function createButtons (container, numberOfButtons) {
    for(let i = 0; i < numberOfButtons; i++) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.type="button";
        div.append(button);
        container.append(div);
    }
}

function addClassToButtons (container, divClass, buttonClass) {
    let divs = container.querySelectorAll('div');
    divs.forEach((e) => e.classList.add(divClass));
    let buttons = container.querySelectorAll('button');
    buttons.forEach((e) => e.classList.add(buttonClass));
}

function addContentToButtons (container, buttonNames) {
    let buttons = container.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = buttonNames[i];
        buttons[i].id = `btn-${buttonNames[i]}`;
    }
}

// Create all buttons

const numberButtonsContainer = document.querySelector('.outer-number-buttons-container');
createButtons(numberButtonsContainer, 12);
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'buttons');
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'number-buttons');
addContentToButtons(numberButtonsContainer, [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`, `0`, `=`]);
numberButtonsContainer.querySelector("#" + CSS.escape("btn-=")).style="background-color:rgb(138, 126, 121)";

const operationButtonsContainer = document.querySelector('.outer-operation-buttons-container');
createButtons(operationButtonsContainer, 4);
addClassToButtons(operationButtonsContainer, 'operation-buttons-container', 'buttons');
addClassToButtons(operationButtonsContainer, 'operation-buttons-container', 'operation-buttons');
addContentToButtons(operationButtonsContainer, [`÷`, `×`, `-`, `+`]);

const clearButtonContainer = document.querySelector('.outer-clear-button-container');
createButtons(clearButtonContainer, 1);
addClassToButtons(clearButtonContainer, 'clear-button-container', 'buttons');
addClassToButtons(clearButtonContainer, 'clear-button-container', 'clear-button');
addContentToButtons(clearButtonContainer, [`AC`]);

// Variables and operator

let number = ``;
let a = ``;
let b = ``;
let operator = ``;

// Add event listeners for operations

const displayLower = document.querySelector(`.display-input`);
const displayUpper = document.querySelector(`.display-result`);

const numberButtons = document.querySelectorAll('.number-buttons-container');
numberButtons.forEach(btn => btn.childNodes[0].addEventListener('click', numberInput));
numberButtons.forEach(btn => btn.childNodes[0].addEventListener('transitionend', removeTransition));

const operationButtons = document.querySelectorAll('.operation-buttons-container');
operationButtons.forEach(btn => btn.childNodes[0].addEventListener('click', operatorInput));
operationButtons.forEach(btn => btn.childNodes[0].addEventListener('transitionend', removeTransition));

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clear);
clearButton.addEventListener('transitionend', removeTransition);