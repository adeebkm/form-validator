const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

function showError(input,message) {
    const formControl=input.parentElement;
    formControl.className='form-control error'
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function isValidEmail(email){
    const re=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());

    
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value===''){
        showError(username, 'Please enter a username');
    } else {
        showSuccess(username);
    }
    if(email.value===''){
        showError(email, 'EMAIL IS REQUIRED');
    }else if (!isValidEmail(email.value)){
        showError(email, 'email is not valid');
    }else {
        showSuccess(email);
    }
    if(password.value===''){
        showError(password, 'Please enter a password');
    } else {
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2, 'Please enter a password2');
    } else {
        showSuccess(password2);
    }
})