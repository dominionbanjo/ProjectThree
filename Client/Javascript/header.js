const token = window.localStorage.getItem('token')
const userName = window.localStorage.getItem('name')


const displayName = userName ? userName : 'Login'
let dropdownState = false

const header = document.querySelector('header')
const profileP = document.querySelector('.profile p')


// header_btn.innerHTML = `<p>${user}</p>`
profileP.innerText = `${displayName}`