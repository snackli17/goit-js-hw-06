
const inputFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

function changeFontSize() {
    text.setAttribute("style", `font-size: ${inputFont.value}px`);
}
inputFont.addEventListener("input", changeFontSize);














