const inputNum = document.querySelector("input");
console.log(inputNum);

const createBtn = document.querySelector("button[data-create]");
console.log(createBtn);

const destroyBtn = document.querySelector("button[data-destroy]");
console.log(destroyBtn);

const divBoxes = document.getElementById("boxes");
console.log(divBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", function (amount) {
  const inputValue = Number(inputNum.value);
  console.log(inputValue);

  let i = inputValue;

  for (i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.className = "box";

    divBoxes.appendChild(div);
  }
});

destroyBtn.addEventListener("click", function () {});
