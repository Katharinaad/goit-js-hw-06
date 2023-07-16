const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientUl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add = "item";
  ingredientUl.appendChild(ingredientLi);
}
document.body.appendChild(ingredientUl);

console.log(ingredientUl);
