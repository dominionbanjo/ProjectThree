const token = window.localStorage.getItem('token')
const userName = window.localStorage.getItem('name')
const tag = document.querySelector('.tag')
const displayName = userName ? userName : 'Login'
const header = document.querySelector('header')
const profile = document.querySelector('.profile')
const profileP = document.querySelector('.profile p')


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