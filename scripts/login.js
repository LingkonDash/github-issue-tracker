const loginBtn = document.getElementById('login-btn');
const passInput = document.getElementById('login-password')
const emailInput = document.getElementById('login-email')

loginBtn.addEventListener('click', () => {

  if(passInput.value !== 'admin123' || emailInput.value !== 'admin') {
    alert('Invalid Password or Username')
    return;
  }
  window.location.assign("main.html")
  
})


function eyebutton() {
  const eye =  document.querySelector('#eye');
  
  if(eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');

    passInput.type = 'text'

  } else {
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
    
    passInput.type = 'password'
  }
  
}