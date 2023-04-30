let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
const screen = document.getElementsByClassName("screen");
let text = screen[0].innerText;

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  if (text.includes("x") === true) {
    equalsF();
    let textToAdd = " x ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "*";
  } else {
    let textToAdd = " x ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "*";
  }
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  if (text.includes("/") === true) {
    equalsF();
    let textToAdd = " / ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "/";
  } else {
    let textToAdd = " / ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "/";
  }
});

const add = document.getElementById("add");
add.addEventListener("click", () => {
  if (text.includes("+") === true) {
    equalsF();
    let textToAdd = " + ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "+";
  } else {
    let textToAdd = " + ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "+";
  }
});

const substract = document.getElementById("minus");
substract.addEventListener("click", () => {
  if (text.includes("-") === true) {
    equalsF();
    let textToAdd = " - ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "-";
  } else {
    let textToAdd = " - ";
    text = text + textToAdd;
    screen[0].innerText = text;
    operator = "-";
  }
});

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    let textToAdd = e.target.innerText;
    text = text + textToAdd;
    screen[0].innerText = text;
  });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", equalsF);

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  text = "";
  screen[0].innerText = text;
});

function operate(firstNumber, secondNumber, operator) {
  if (operator === "*") {
    let answer = 0;
    answer = firstNumber * secondNumber;
    text = answer;
    screen[0].innerText = text;
  } else if (operator === "/") {
    let answer = 0;
    text.toString;
    answer = firstNumber / secondNumber;
    text = answer;
    text.toString;
    screen[0].innerText = text;
  } else if (operator === "+") {
    answer = firstNumber + secondNumber;
    text = answer;
    text.toString;
    screen[0].innerText = text;
  } else if (operator === "-") {
    answer = firstNumber - secondNumber;
    text = answer;
    text.toString;
    screen[0].innerText = text;
  }
}

function equalsF() {
  if (operator === "*") {
    const myArray = text.split(" x ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[1]);
    operate(firstNumber, secondNumber, operator);
  } else if (operator === "/") {
    const myArray = text.split(" / ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[1]);
    operate(firstNumber, secondNumber, operator);
  } else if (operator === "+") {
    const myArray = text.split(" + ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[1]);
    operate(firstNumber, secondNumber, operator);
  } else if (operator === "-") {
    const myArray = text.split(" - ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[1]);
    operate(firstNumber, secondNumber, operator);
  }
}
