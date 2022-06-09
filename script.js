"use strict";
// объявление переменных
const button = document.getElementById("btn");
const squareButton = document.getElementById("e_btn");
const square = document.getElementById("square");
const input = document.getElementById("text");
const circle = document.getElementById("circle");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
let color;
let w;

// получение значения цвета
input.addEventListener("change", function () {
  color = input.value;
  input.value = "";
});

//изменение цвета
const changeColor = function () {
  square.style.backgroundColor = color;
};

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    changeColor();
  }
});

// изменение цвета при клике на кнопку
button.addEventListener("click", function () {
  changeColor();
});

// скрытие кнопки
squareButton.style.display = "none";

//Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить
//  в свойства ширины и высоты кружка(который внутри квадрата)(height и width)(в процентах!!)

range.setAttribute("min", 0);
range.setAttribute("max", 100);
range.setAttribute("value", 50);
span.textContent = range.value;
range.addEventListener("input", function () {
  span.textContent = range.value;
  circle.style.height = Number(range.value) + "%";
  circle.style.width = Number(range.value) + "%";
});
