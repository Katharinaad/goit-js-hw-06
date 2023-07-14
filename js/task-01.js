const numOfCat = document.querySelectorAll(".item");
console.log("Number of categories:", numOfCat.length);

numOfCat.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent}
     Elements: ${item.children.length}`
  );
});
