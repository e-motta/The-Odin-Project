// Create squares in fixed grid. Grid size is defined in CSS.
const container = document.querySelector('.grid-container');
let numberOfLines = 16
let numberOfSquares = numberOfLines ** 2;

for(let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    container.append(square);
}

const squares = container.querySelectorAll('div');

// Default color for grid.
squares.forEach((e) => e.classList.add('squares-default'));

// Color when hovering mouse over grid.
function mouseHover(e) {
    this.classList.add('squares-hover');
}
squares.forEach((e) => e.addEventListener('mouseover', mouseHover));

// Clear grid when button is pressed.
function clearGrid() {
    squares.forEach((e) => e.classList.remove('squares-hover'));
}
function click(){
    console.log(this)
    this.classList.add('clicking');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicking');
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => clearGrid());
clearButton.addEventListener('click', click);
clearButton.addEventListener('transitionend', removeTransition);


// Ask user for number of squares when button is pressed.
// Must update HTML and CSS.