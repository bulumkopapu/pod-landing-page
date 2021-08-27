const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e)=>{
    let messages = [];
    if(email.value === '' || email.value == null){
        messages.push('Email is required')
    }else if(email.value.match(pattern) == null){
        messages.push('Oops! Please check your email')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
    
})