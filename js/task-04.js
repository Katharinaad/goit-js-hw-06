const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const value = document.getElementById("value");
let counterValue = 0;

console.log(decrementBtn);
console.log(incrementBtn);

function decrement(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment(event) {
  counterValue += 1;
  value.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
