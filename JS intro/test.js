let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  if (i === 10) {
    const para = document.createElement('p');
    para.textContent = `Countdown ${i}`;
    output.appendChild(para);
  } else if (i === 0) {
    const para = document.createElement('p');
    para.textContent = `Blast off!`;
    output.appendChild(para);
  } else {
    const para = document.createElement('p');
    para.textContent = i;
    output.appendChild(para);
  }
  i--;

}


function primeNum(n) {
  let primes = ``
  outer:
  for(let i = n-1; i > 1; i--) {
    for(let j = i-1; j > 1; j--) {
      if(i % j === 0) { continue outer }
    }
    
    primes += `${i}, `;
  }
  console.log(primes.slice(0, -2));
}
