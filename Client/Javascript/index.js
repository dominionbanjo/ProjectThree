const testimonials = document.querySelectorAll('.testimonial')
let index = 0
testimonials[index].classList.remove('hidden')

const profile = document.querySelector('.profile')
const quote = document.getElementById('quote')
const target = document.querySelector('.contact-us-page')

const navLeft = document.querySelector('.nav-left')
const navRight = document.querySelector('.nav-right')
const bullets = document.querySelectorAll('.bullet')
const tag = document.querySelector('.tag')

const profileName = document.querySelector('.profile p')




tag.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="index.html"
})

profile.addEventListener('click',(e)=>{
    e.preventDefault()
    if(profileName.innerText==='Login'){
        window.location.href="login.html"
    }
    else{
        window.location.href="profile.html"
    }
})

quote.addEventListener('click',(e)=>{
    e.preventDefault()
    target.scrollIntoView({behavior: 'smooth'})
})

const showTestimonial = () =>{
    testimonials.forEach((testimonial)=>{
        testimonial.classList.add('hidden')
    })

    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === index);
    });

    index = (index + 1) % testimonials.length
   
    testimonials[index].classList.remove('hidden')
}


setInterval(showTestimonial,5000)


let currentIndex = 0


navLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});
  
navRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});



