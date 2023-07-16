const colorBtn = document.querySelector(".change-color");
console.log(colorBtn);

const colorName = document.querySelector(".color");
console.log(colorName);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.innerHTML = randomColor;
});

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   colorName.innerHTML = "#" + randomColor;
// };

// colorBtn.addEventListener("click", setBg);
// setBg();
