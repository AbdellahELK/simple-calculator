// let num1 = 15
// let num2 = 3
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sum = document.getElementById("sum-el")

// function add(){
//     sum.innerHTML = num1 + num2
//     console.log(num1 + num2)
// }
// function subtract(){
//     sum.innerHTML = num1 - num2
//     console.log(num1 - num2)
// }
// function divide(){
//     sum.innerHTML = num1 / num2
//     console.log(num1 / num2)
// }
// function multiply(){
//     sum.innerHTML = num1 * num2
//     console.log(num1 * num2)
// }


//=======================================
// let calcul = document.getElementById("calcul")
// function sum(){
//     let nbr1 = parseFloat(document.getElementById("nbr1").value)
//     let nbr2 = parseFloat(document.getElementById("nbr2").value)
//     console.log(nbr1 + nbr2)
//     calcul.innerText = nbr1 + nbr2
// }
//======================================
// let etoile = document.getElementById("aff")
// function etoil(){
//     let nbret = parseFloat(document.getElementById("nbr-et").value)
//     let stars = "";
//     for (let i = 0; i < nbret; i++) {
//         stars += "*";
//         console.log(stars);

//       }
//     etoile.innerHTML = stars;    
// }
//=================================

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

