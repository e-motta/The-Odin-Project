// Create squares in fixed grid
const container = document.querySelector('.grid-container');
let numberOfLines = 16
let numberOfSquares = numberOfLines ** 2;

for(let i = 0; i < numberOfSquares; i++) {
    const newDiv = document.createElement('div');
    container.append(newDiv);
}

// Add class to squares
const squares = container.querySelectorAll('div');

// Default color
squares.forEach((e) => e.classList.add('squares-default'));

// Hover color
function mouseHover(e) {
    this.classList.add('squares-hover');
}
squares.forEach((e) => e.addEventListener('mouseover', mouseHover));

// Clear grid
function clearGrid() {
    console.log(squares) // DEBUG
    squares.forEach((e) => e.classList.add('squares-default'));
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => clearGrid()) // FIX ME!