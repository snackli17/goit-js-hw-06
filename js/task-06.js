
const textInput = document.querySelector("#validation-input");
const lengthEl = textInput.getAttribute("data-length");

function inputText() {
  if (textInput.value.length === Number(lengthEl)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
};

textInput.addEventListener("blur", inputText);


