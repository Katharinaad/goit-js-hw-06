const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const length = event.target.value.length;

  if (length === 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
