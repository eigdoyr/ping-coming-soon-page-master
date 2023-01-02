const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errMsg = document.getElementById("error__msg");

const showError = (element) => {
  element.classList.add("error__msg");
  errMsg.classList.remove("hide");
};

form.addEventListener("submit", (event) => {
  if (!emailInput.validity.valid) {
    showError(emailInput);
    event.preventDefault();
  }
});
