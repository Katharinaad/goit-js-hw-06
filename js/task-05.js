const refs = {
  input: document.getElementById("name-input"),
  nameTab: document.getElementById("name-output"),
};
let anonymous = "Anonymous";

function nameChange(event) {
  refs.nameTab.textContent = event.currentTarget.value || anonymous;
}

refs.input.addEventListener("input", nameChange);
