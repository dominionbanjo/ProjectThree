const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const button = document.getElementById("btn");
const msg = document.querySelector(".message");
// const url ='http://localhost:8080'
const url = "https://cleanbees001.onrender.com";
const profileName = document.querySelector(".profile p");

let user = {};

button.addEventListener("click", (e) => {
  e.preventDefault();

  msg.innerText = "";

  if (passwordInput.value !== confirmPasswordInput.value) {
    msg.innerText = "Your Password does not match please Reconfirm!!";
  } else if (
    lastNameInput.value &&
    firstNameInput.value &&
    emailInput.value &&
    passwordInput.value
  ) {
    user = {
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  } else {
    // alert('Please Insert all fields')
    msg.innerText = "All fields must be filled!!!";
  }
  console.log(user);
  createAccount(user);
  if (!result.error) {
    alert("Signup Sucessful");

    firstNameInput.value = "";
    lastNameInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }
});

async function createAccount(data) {
  try {
    const response = await fetch(`${url}/accounts/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.error) msg.innerText = result.error;

    if (response.status === 200) window.location.href = "login.html";

    console.log(result);
  } catch (error) {
    msg.innerText = error.error;
    console.error(error);
  }
}
