// Functions for performing operations

function operate (operator, a, b) {
    if(operator === `+`) return +a + +b;
    else if(operator === `-`) return +a - +b;
    else if(operator === `×`) return +a * +b;
    else if(operator === `÷`) return +(+a / +b).toPrecision(5);
    else return a;
}


// Functions for displaying operations and results

function numberInput () {
    this.classList.toggle('clicking');
    
    if (this.innerText.includes('.') && displayLower.innerText.includes('.')) {
        return
    }

    if ((input === `` && this.innerText !== '0') || (input !== ``)) {
        if (displayLower.innerText.length < 7) {  // Max 7 characters
            input += this.innerText;
            if (displayLower.innerText === `0`) {
                displayLower.innerText = this.innerText;
            } else {
                displayLower.innerText += this.innerText;
            }
        }
    }
}


function setOperands () {
    if (a === `` && first_number) {
        a = input;
        input = ``;
        first_number = false;
        return
    }

    if (b === `` && a !== ``) {
        b = input;
        input = ``;
        return
    }
}


function operatorInput () {
    this.classList.toggle('clicking');
    
    dl_text = displayLower.innerText
    if (!dl_text.includes(`+`) && 
        !dl_text.includes(`-`) && 
        !dl_text.includes(`×`) && 
        !dl_text.includes(`÷`)) {
        operator = this.innerText;
        displayLower.innerText += operator;
    }

    if (result) {
        b = ``;
        a = result;
        first_number = false;
        return
    }

    setOperands()
}


function equalsInput () {
    setOperands()
    
    if (this.id === "btn-=") {
        this.classList.toggle('clicking');
    }
    if (b === ``) {
        displayUpper.innerText = displayLower.innerText + ` =`;
    }
    if (a !== `` && b !== ``) {
        result = operate(operator, a, b);
        displayUpper.innerText = displayLower.innerText + ` =`;
        displayLower.innerText = result;
    }

    return result
}


function clear () {
    this.classList.toggle('clicking');
    displayLower.innerText = `0`;
    displayUpper.innerText = `ㅤ`;
    input = ``
    a = ``;
    b = ``;
    operator = ``;
    first_number = true;
    result = 0;
}


// Function for removing clicking transition

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}


// Functions for creating buttons inside divs

function createButtons (container, numberOfButtons) {
    for (let i = 0; i < numberOfButtons; i++) {
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


// Create all buttons and containers

const numberButtonsContainer = document.querySelector('.outer-number-buttons-container');
createButtons(numberButtonsContainer, 12);
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'buttons');
addClassToButtons(numberButtonsContainer, 'number-buttons-container', 'number-buttons');
addContentToButtons(numberButtonsContainer, [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`, `0`, `=`]);
numberButtonsContainer.querySelector("#" + CSS.escape("btn-=")).style="background-color:rgb(138, 126, 121)";
numberButtonsContainer.querySelector("#" + CSS.escape("btn-=")).classList = "buttons equals-button"
numberButtonsContainer.querySelector("#" + CSS.escape("btn-=")).parentElement.classList = "equals-button-container"

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

let input = ``;
let a = ``;
let b = ``;
let operator = ``;
let first_number = true;
let result = 0

// Add event listeners for operations

const displayLower = document.querySelector(`.display-lower`);
const displayUpper = document.querySelector(`.display-upper`);

const numberButtons = document.querySelectorAll('.number-buttons-container');
numberButtons.forEach(btn => {
    btn.childNodes[0].addEventListener('click', numberInput)
});
numberButtons.forEach(btn => {
    btn.childNodes[0].addEventListener('transitionend', removeTransition)
});

const operationButtons = document.querySelectorAll('.operation-buttons-container');
operationButtons.forEach(btn => {
    btn.childNodes[0].addEventListener('click', operatorInput)
});
operationButtons.forEach(btn => {
    btn.childNodes[0].addEventListener('transitionend', removeTransition)
});

const equalsButton = document.querySelector('.equals-button')
equalsButton.addEventListener('click', equalsInput);
equalsButton.addEventListener('transitionend', removeTransition);

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clear);
clearButton.addEventListener('transitionend', removeTransition);