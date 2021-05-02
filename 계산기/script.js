'use strict';


const calculNum = document.querySelectorAll('.number')
const calculOutput = document.querySelector(".output")
const calculBtn = document.querySelectorAll("button")


function numberInput(event) {
  const numberBtn = event.target;
  const number = calculNum.value;
  console.log(number);

}

function init() {
  calculNum.addEventListener('click', numberInput);
}

init();









