const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.dir(form);

  console.log(`Email: ${form.email.value} Password: ${form.password.value}`);

  if (form.email.value === "" || form.password.value === "") {
    alert("All fields must be filled in");
  }

  form.reset();
}
