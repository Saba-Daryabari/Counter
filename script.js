"use strict";
const btnPerv = document.querySelector(".btn-perv");
const btnNext = document.querySelector(".btn-next");
const btnReset = document.querySelector(".btn-reset");

let currentNum = 0;

const update = function () {
  document.getElementById("number").textContent = currentNum;
};

//Event handlers .
btnNext.addEventListener("click", function () {
  currentNum++;
  update();
});

btnPerv.addEventListener("click", function () {
  if (num.textContent > 0) {
    currentNum--;
    update();
  } else {
    return;
  }
});
btnReset.addEventListener("click", function () {
  currentNum = 0;
  update();
});
