const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const button = document.getElementById('btn')
const profile = document.querySelector('.profile')
const msg = document.querySelector('.message')
const url ='http://localhost:8080'
const tag = document.querySelector('.tag')

tag.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="index.html"
})

profile.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="login.html"
})



let user = {}
button.addEventListener('click',(e)=>{
    e.preventDefault()
    msg.innerText = ''
    if(nameInput.value&&passwordInput.value){
        user = {
            email:nameInput.value,
            password:passwordInput.value
        }

        loginUser(user)
        alert('Login Sucessful')

        nameInput.value = ''
        passwordInput.value = ''
    }
    else{
        // alert('Please Insert all fields')
        msg.innerText = 'All fields must be filled!!!'
    }


    console.log(user)
})



async function loginUser(data) {
    try {
        const response = await fetch(`${url}/accounts/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.error) msg.innerText = result.error
        else if (response.status === 200) window.location.href = 'index.html'
        else{
            window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
            window.localStorage.setItem('name', result.user.first_name)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8    
        }
        
        console.log(result);
    } catch (error) {
        msg.innerText = error.error
        console.error(error);
    }
}