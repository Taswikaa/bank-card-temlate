const numberInput = document.querySelector('#card-number');
const holderInput = document.querySelector('#card-holder');
const cvvInput = document.querySelector('#cvv');

numberInput.addEventListener('keydown', e => {
  const regex = /[1-9]/g;

  if (!regex.test(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  }

  if (numberInput.value.length % 5 === 0 && e.key !== 'Backspace' && numberInput.value.length !== 20) {
    numberInput.value += ' ';
  }
});

cvvInput.addEventListener('keydown', e => {
  const regex = /[1-9]/g;
  
  if (!regex.test(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  }
});

holderInput.addEventListener('keydown', e => {
  if (!isNaN(e.key) && e.key !== ' ') {
    e.preventDefault();
  }
});