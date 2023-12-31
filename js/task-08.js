const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.dir(form);

  const userValue = { email: form.email.value, password: form.password.value };

  if (form.email.value === "" || form.password.value === "") {
    alert("All fields must be filled in!");
  } else {
    alert("The form has been submitted!");
    console.log(userValue);
  }

  form.reset();
}
