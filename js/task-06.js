const inputEl = document.getElementById("validation-input");
console.log(inputEl);

console.log(inputEl.dataset.length); // string

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const length = event.target.value.length;
  const requiredLength = Number(inputEl.dataset.length);
  console.log(requiredLength);

  if (length === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
