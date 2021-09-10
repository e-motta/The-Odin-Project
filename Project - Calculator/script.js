const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate (operator, a, b) {
    if(operator === `+`) return add(a, b);
    else if(operator === `-`) return subtract(a, b);
    else if(operator === `*`) return multiply(a, b);
    else if(operator === `/`) return divide(a, b);
}

function createButtons (buttonsContainer) {
    for(let i = 0; i < 16; i++) {
        const button = document.createElement('button');
        buttonsContainer.append(button);
    }
    let buttons = buttonsContainer.querySelectorAll('button');
    buttons.forEach((e) => e.classList.add('buttons'));
}

const buttonsContainer = document.querySelector('.buttons-container');
createButtons(buttonsContainer)