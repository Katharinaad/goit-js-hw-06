const slider = document.getElementById("font-size-control");
console.log(slider);

const textSize = document.getElementById("text");
console.log(textSize);

// slider.addEventListener("input", function () {
//   const size = slider.value;
//   textSize.style.fontSize = size + "px";
// });

slider.addEventListener("input", sliderSize);

function sliderSize(event) {
  let size = slider.value;
  console.log(size);
  textSize.style.fontSize = size + "px";
}
