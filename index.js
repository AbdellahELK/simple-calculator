let display = document.querySelector('.resault');
let myNumber = null;
let myOperator = null;

function nbr(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}

function Soperator(operator) {
  if (myNumber === null) {
    myNumber = parseFloat(display.value);
  } else {
    execute();
  }
  myOperator = operator;
  display.value = '';
}

function execute() {
  if (myOperator !== null) {
    let number2 = parseFloat(display.value);
    switch (myOperator) {
      case '+':
        myNumber += number2;
        break;
      case '-':
        myNumber -= number2;
        break;
      case '*':
        myNumber *= number2;
        break;
      case '/':
        myNumber /= number2;
        break;
    }
    display.value = myNumber;
    myOperator = null;
  }
}

function Cclear() {
  display.value = '0';
  myNumber = null;
  myOperator = null;
}

