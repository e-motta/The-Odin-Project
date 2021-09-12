// Functions for operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate (operator, a, b) {
    if(operator === `+`) return add(a, b);
    else if(operator === `–`) return subtract(a, b);
    else if(operator === `x`) return multiply(a, b);
    else if(operator === `÷`) return divide(a, b);
}

function input () {
    this.classList.toggle('clicking');
    const displayInput = document.querySelector(`.display-input`)
    if (this.innerText === `=`) {
        return result(this.innerText);
    }
    
    if (displayInput.innerText === `0`) {
        displayInput.innerText = ``;
    }
    if (displayInput.innerText.length < 9) {
        displayInput.innerText += this.innerText;
    }
}

function clear () {
    this.classList.toggle('clicking');
    const displayInput = document.querySelector(`.display-input`)
    displayInput.innerText = `0`;
}

function result () {

}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}

// Functions for creating buttons

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
createButtons(numberButtonsContainer, 11);
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'buttons');
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'number-buttons');
addContentToButtons(numberButtonsContainer, [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `0`, `=`]);
numberButtonsContainer.querySelector("#btn-0").parentElement.style="width:200px";
numberButtonsContainer.querySelector("#btn-0").style="width:187px";
numberButtonsContainer.querySelector("#" + CSS.escape("btn-=")).style="background-color:rgb(122, 112, 107)"

const operationButtonsContainer = document.querySelector('.outer-operation-buttons-container');
createButtons(operationButtonsContainer, 4);
addClassToButtons(operationButtonsContainer, 'operation-buttons-container', 'buttons');
addClassToButtons(operationButtonsContainer, 'operation-buttons-container', 'operation-buttons')
addContentToButtons(operationButtonsContainer, [`÷`, `x`, `–`, `+`]);

const clearButtonContainer = document.querySelector('.outer-clear-button-container');
createButtons(clearButtonContainer, 1);
addClassToButtons(clearButtonContainer, 'clear-button-container', 'buttons');
addClassToButtons(clearButtonContainer, 'clear-button-container', 'clear-button')
addContentToButtons(clearButtonContainer, [`AC`]);

// Operations

const numberButtons = document.querySelectorAll('.number-buttons-container');
numberButtons.forEach(btn => btn.addEventListener('click', input));
numberButtons.forEach(btn => btn.addEventListener('transitionend', removeTransition));

const operationButtons = document.querySelectorAll('.operation-buttons-container');
operationButtons.forEach(btn => btn.addEventListener('click', input));
operationButtons.forEach(btn => btn.addEventListener('transitionend', removeTransition));

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clear);
clearButton.addEventListener('transitionend', removeTransition)