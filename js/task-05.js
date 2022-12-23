let userNameInputEl = document.querySelector("#name-input");
let userNameOutput = document.querySelector("#name-output");

userNameInputEl.addEventListener("input", (event) => {
    if (userNameInputEl.value === "") {
        userNameOutput.textContent = "Anonymous";
    } else {
        userNameOutput.textContent = event.currentTarget.value
    }

  });
  
 