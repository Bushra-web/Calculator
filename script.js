// Bushra_Moneeb

const screen = document.getElementById('screen');

let currentValue = '0';
let previousValue = null;
let operator = null;
let resetNext = false;

function updateScreen() {
  screen.textContent = currentValue;
}

function inputNumber(digit) {
  if (currentValue === '0' || resetNext) {
    currentValue = digit;
    resetNext = false;
  } else {
    currentValue += digit;
  }
  updateScreen();
}

function inputDot() {
  if (resetNext) {
    currentValue = '0';
    resetNext = false;
  }
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
  updateScreen();
}

function clearAll() {
  currentValue = '0';
  previousValue = null;
  operator = null;
  updateScreen();
}

function toggleSign() {
  currentValue = (parseFloat(currentValue) * -1).toString();
  updateScreen();
}

function percent() {
  currentValue = (parseFloat(currentValue) / 100).toString();
  updateScreen();
}

function chooseOperator(op) {
  if (operator && !resetNext) {
    calculate();
  }
  previousValue = parseFloat(currentValue);
  operator = op;
  resetNext = true;
}

function calculate() {
  if (operator === null || previousValue === null) return;

  const current = parseFloat(currentValue);
  let result = previousValue;

  if (operator === '+') result = previousValue + current;
  if (operator === '-') result = previousValue - current;
  if (operator === 'x') result = previousValue * current;
  if (operator === '/') result = previousValue / current;

  currentValue = result.toString();
  operator = null;
  previousValue = null;
  resetNext = true;
  updateScreen();
}
