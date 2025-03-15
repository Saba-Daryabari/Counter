"use strict";
const num = document.querySelector(".number");
const btnPerv = document.querySelector(".btn-perv");
const btnNext = document.querySelector(".btn-next");
const btnReset = document.querySelector(".btn-reset");

let currentNum = 0;

const update = function () {
  document.getElementById("number").textContent = currentNum;
};

//Event handlers .
btnNext.addEventListener("click", function () {
  num.classList.remove("number-zero");
  currentNum++;
  update();
});

btnPerv.addEventListener("click", function () {
  if (num.textContent == 0) {
    num.classList.add("number-zero");
  }

  if (num.textContent > 0) {
    currentNum--;
    update();
  } else {
    return;
  }
});
btnReset.addEventListener("click", function () {
  num.classList.remove("number-zero");
  currentNum = 0;
  update();
});
