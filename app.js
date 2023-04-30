let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
const screen = document.getElementsByClassName("screen");
let text = screen[0].textContent;
let myArray = [];

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  if (text.length === 0) {
    alert("Input number first");
  } else {
    if (myArray.length === 0) {
      operator = "*";
      text = text + " x ";
      myArray = text.split(" ");
      screen[0].textContent = text;
    } else {
      myArray = text.split(" ");
      if (myArray[2] != "") {
        equalsF();
        operator = "*";
        myArray = [text, " x ", ""];
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      } else {
        operator = "*";
        myArray[1] = " x ";
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      }
    }
  }
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  if (text.length === 0) {
    alert("Input number first");
  } else {
    if (myArray.length === 0) {
      operator = "/";
      text = text + " / ";
      myArray = text.split(" ");
      screen[0].textContent = text;
    } else {
      myArray = text.split(" ");
      if (myArray[2] != "") {
        equalsF();
        operator = "/";
        myArray = [text, " / ", ""];
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      } else {
        operator = "/";
        myArray[1] = " / ";
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      }
    }
  }
});

const add = document.getElementById("add");
add.addEventListener("click", () => {
  if (text.length === 0) {
    alert("Input number first");
  } else {
    if (myArray.length === 0) {
      operator = "+";
      text = text + " + ";
      myArray = text.split(" ");
      screen[0].textContent = text;
    } else {
      myArray = text.split(" ");
      if (myArray[2] != "") {
        equalsF();
        operator = "+";
        myArray = [text, " + ", ""];
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      } else {
        operator = "+";
        myArray[1] = " + ";
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      }
    }
  }
});

const substract = document.getElementById("minus");
substract.addEventListener("click", () => {
  if (text.length === 0) {
    alert("Input number first");
  } else {
    if (myArray.length === 0) {
      operator = "-";
      text = text + " - ";
      myArray = text.split(" ");
      screen[0].textContent = text;
    } else {
      myArray = text.split(" ");
      if (myArray[2] != "") {
        equalsF();
        operator = "-";
        myArray = [text, " - ", ""];
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      } else {
        operator = "-";
        myArray[1] = " - ";
        text = myArray[0] + myArray[1] + myArray[2];
        screen[0].textContent = text;
      }
    }
  }
});

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    if (text.length === 0) {
      if (e.target.textContent === "0") {
        alert("Zero cant be the first digit.");
      } else {
        let textToAdd = e.target.textContent;
        text = text + textToAdd;
        screen[0].textContent = text;
      }
    } else {
      let textToAdd = e.target.textContent;
      text = text + textToAdd;
      screen[0].textContent = text;
    }
  });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  if (text.length === 0) {
    text = "";
    screen[0].textContent = text;
  } else {
    equalsF();
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  text = "";
  screen[0].textContent = text;
  myArray = [];
});

function operate(firstNumber, secondNumber, operator) {
  if (operator === "*") {
    let answer = 0;
    answer = firstNumber * secondNumber;
    text = answer;
    screen[0].textContent = text;
  } else if (operator === "/") {
    let answer = 0;
    answer = firstNumber / secondNumber;
    text = answer;
    screen[0].textContent = text;
  } else if (operator === "+") {
    answer = firstNumber + secondNumber;
    text = answer;
    screen[0].textContent = text;
  } else if (operator === "-") {
    answer = firstNumber - secondNumber;
    text = answer;
    screen[0].textContent = text;
  }
}

function equalsF() {
  if (operator === "*") {
    myArray = text.split(" ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[2]);
    operate(firstNumber, secondNumber, operator);
    myArray = [];
  } else if (operator === "/") {
    myArray = text.split(" ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[2]);
    operate(firstNumber, secondNumber, operator);
    myArray = [];
  } else if (operator === "+") {
    myArray = text.split(" ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[2]);
    operate(firstNumber, secondNumber, operator);
    myArray = [];
  } else if (operator === "-") {
    myArray = text.split(" ");
    firstNumber = parseInt(myArray[0]);
    secondNumber = parseInt(myArray[2]);
    operate(firstNumber, secondNumber, operator);
    myArray = [];
  }
}
