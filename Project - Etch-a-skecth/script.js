function createGrid(container, numberOfLines) {
    container.style.gridTemplateColumns = `repeat(${numberOfLines}, auto)`;
    let numberOfSquares = numberOfLines ** 2;
    for(let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('div');
        container.append(square);
    }
    let squares = container.querySelectorAll('div');
    // Default color for grid.
    squares.forEach((e) => e.classList.add('squares-default'));
    // Change color when hovering mouse over grid.
    squares.forEach((e) => e.addEventListener('mouseover', mouseHover));
}

function mouseHover(e) {
    this.classList.add('squares-hover');
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    const newNumberOfLines = enterNumberOfLines();
    createGrid(container, newNumberOfLines);
    this.classList.toggle('clicking');
}

function enterNumberOfLines() {
    const newNumberOfLines = prompt('Enter the number of lines for the sketch (0-100)');
    if(newNumberOfLines > 0 && newNumberOfLines <= 100 && newNumberOfLines !== null && newNumberOfLines !== undefined) {
        return newNumberOfLines;
    } else {
        alert('Please, enter a number between 1 and 100')
        return enterNumberOfLines();
    }
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}

const container = document.querySelector('.grid-container');

createGrid(container, 16)

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);
clearButton.addEventListener('transitionend', removeTransition);