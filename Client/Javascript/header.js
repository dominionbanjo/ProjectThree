const token = window.localStorage.getItem('token')
const userName = window.localStorage.getItem('name')
const tag = document.querySelector('.tag')
const displayName = userName ? userName : 'Login'
const header = document.querySelector('header')
const profile = document.querySelector('.profile')
const profileP = document.querySelector('.profile p')
const targetTo = document.querySelector('.contact-us-page')
const contact = document.querySelector('.contact-header')
const navbarLinks = document.querySelectorAll('nav a');

console.log(navbarLinks.length)

let currentLocation = window.location.href;

for (var i = 0; i < navbarLinks.length; i++) {
    console.log(navbarLinks[i].href)

    if (navbarLinks[i].href === currentLocation) {
      navbarLinks[i].classList.add('active-anchor');
      break;
    }
  }
  console.log(navbarLinks)

// header_btn.innerHTML = `<p>${user}</p>`
profileP.innerText = `${displayName}`


profile.addEventListener('click',(e)=>{
    e.preventDefault()
    if(profileP.innerText==='Login'){
        window.location.href="login.html"
    }
    else{
        window.location.href="profile.html"
    }
})


tag.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="index.html"
})