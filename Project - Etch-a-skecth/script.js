function createGrid(container, numberOfLines) { // FIXME: change CSS grid rows and columns
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
    const newNumberOfLines = prompt('Please, enter the number of line for the grid (0-100)'); // FIXME: limit 1-100; null; undefined
    createGrid(container, newNumberOfLines);
    this.classList.toggle('clicking');
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