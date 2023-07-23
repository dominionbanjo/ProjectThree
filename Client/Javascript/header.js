const token = window.localStorage.getItem('token')
const userName = window.localStorage.getItem('name')
const tag = document.querySelector('.tag')
const displayName = userName ? userName : 'Log In'
const header = document.querySelector('header')
const profile = document.querySelector('.profile')
const profile_pop = document.querySelector('.profile-pop p')
const profileP = document.querySelector('.profile p')
const targetTo = document.querySelector('.contact-us-page')
const contact = document.querySelector('.contact-header')
const navbarLinks = document.querySelectorAll('nav a');
const menu = document.querySelector('.menu')
const header_pop = document.querySelector('.header-pop')
const close_header = document.querySelector('.profile-pop .svg2')

console.log(navbarLinks.length)

header_pop.classList.remove('show-head')

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
profile_pop.textContent = `${displayName}`


profile.addEventListener('click',(e)=>{
    e.preventDefault()
    if(profileP.innerText==='Log In'){
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



menu.addEventListener('click',()=>{
    header_pop.classList.add('show-head')
})

close_header.addEventListener('click',()=>{
    header_pop.classList.remove('show-head')
})


profile_pop.addEventListener('click',()=>{
    if(profile_pop.textContent==='Log In'){
        window.location.href="login.html"
    }
    else{
        window.location.href="profile.html"
    }})

console.log(profile_pop.textContent)
