const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.dir(form);

  const userValue = { email: form.email.value, password: form.password.value };
  console.log(userValue);

  if (form.email.value === "" || form.password.value === "") {
    alert("All fields must be filled in");
  }

  form.reset();
}
