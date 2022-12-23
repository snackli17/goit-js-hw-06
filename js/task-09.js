function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonValue = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorValue = document.querySelector(".color");

buttonValue.addEventListener("click", handleClick);

function handleClick() {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValue.textContent = color;
}