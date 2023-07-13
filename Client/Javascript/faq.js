const faqShow = document.querySelectorAll('.www')
const faqShowSvg = document.querySelector('.www')
const general = document.querySelector('.ctrl1')
const generalList = document.querySelector('.list-general')
const setting = document.querySelector('.ctrl2')
const settingList = document.querySelector('.list-setting')


console.log(faqShowSvg.children.item(0))

faqShow.forEach(element=>{
    // console.log(element.nextElementSibling)
    element.addEventListener('click',()=>{
        element.nextElementSibling.classList.toggle('hide')

        element.children.item(0).classList.toggle('upside')

    })
})


general.addEventListener('click',()=>{
    general.classList.add('set-yellow')
    setting.classList.remove('set-yellow')

    if (generalList.classList.contains('hide')){
        generalList.classList.remove('hide')
    }
    settingList.classList.add('hide')
})

setting.addEventListener('click',()=>{
    setting.classList.add('set-yellow')
    general.classList.remove('set-yellow')

    if (settingList.classList.contains('hide')){
        settingList.classList.remove('hide')
    }
    generalList.classList.add('hide')
})


