// const url ='http://localhost:8080'
const url = "https://cleanbees001.onrender.com";
const token = window.localStorage.getItem("token");
const fullname = document.querySelector(".fullname");
const usermail = document.querySelector(".usermail");
const logout = document.querySelector(".logout");
const tag = document.querySelector(".tag");
const editConfirmButton = document.querySelector(".edit-confirm-button");
const editProfileButton = document.querySelector(".edit-profile-button");
const editCancel = document.querySelector(".edit-profile svg");
const editProfileContainer = document.querySelector(".edit-profile");
const msg = document.querySelector(".message");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

let newUser = {};

editConfirmButton.addEventListener("click", async (e) => {
  e.preventDefault();

  msg.innerText = "";

  if (passwordInput.value !== confirmPasswordInput.value) {
    msg.innerText = "Your Password does not match please Reconfirm!!";
    // alert('Your Password does not match please Reconfirm!!')
  } else if (
    lastNameInput.value &&
    firstNameInput.value &&
    emailInput.value &&
    passwordInput.value
  ) {
    newUser = {
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    alert("Signup Sucessful");

    firstNameInput.value = "";
    lastNameInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  } else {
    // alert('Please Insert all fields')
    msg.innerText = "All fields must be filled!!!";
  }
  console.log(newUser);
  await deleteAccount();
  await createAccount(newUser);
  editProfileContainer.classList.add("hide-profile");
});

tag.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});

editProfileButton.addEventListener("click", (e) => {
  e.preventDefault();
  editProfileContainer.classList.remove("hide-profile");
});

editCancel.addEventListener("click", () => {
  editProfileContainer.classList.add("hide-profile");
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("name");
  window.location.href = "index.html";
});

const user = await getProfile();
fullname.textContent = `${user.first_name} ${user.last_name}`;
usermail.textContent = user.email;
console.log(user);

async function getProfile() {
  const response = await fetch(`${url}/user/`, {
    headers: {
      // the authorization token is sent to the server to authenticate the user. See requireAuth.js in the server folder on how to get the token
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

async function deleteAccount(data) {
  try {
    const response = await fetch(`${url}/accounts/auth/deleteAccount`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.error) msg.innerText = result.error;
    console.log(result);
  } catch (error) {
    msg.innerText = error.error;
    console.error(error);
  }
}

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

// const url ='http://localhost:8080'
// const token = window.localStorage.getItem('token')
// const fullname = document.querySelector('.fullname')
// const usermail = document.querySelector('.usermail')
// const logout = document.querySelector('.logout')
// const tag = document.querySelector('.tag')

// tag.addEventListener('click',(e)=>{
//     e.preventDefault()
//     window.location.href="index.html"
// })

// async function getProfile() {
//     const response = await fetch(`${url}/user/`, {
//         headers: {
//             // the authorization token is sent to the server to authenticate the user. See requireAuth.js in the server folder on how to get the token
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     const data = await response.json();
//     return data
// }

// logout.addEventListener('click',(e)=>{
//     e.preventDefault()
//     window.localStorage.removeItem('token')
//     window.localStorage.removeItem('name')
//     window.location.href = 'index.html'
// })

// const user = await getProfile()
// fullname.textContent = `${user.first_name} ${user.last_name}`
// usermail.textContent = user.email
// console.log(user)
