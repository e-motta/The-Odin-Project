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
squares.forEach((e) => e.classList.add('squares'));

