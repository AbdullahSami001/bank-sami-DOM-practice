//step 1: get the button element
document.getElementById('btn-submit').addEventListener('click', function(){
   // step-2: get the email field
   // always use .value to get the value of the field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   
   //step-3: get the password field
   //3.a: set id on the html element
   //3.c: get the value from thr password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'sami@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
   
})