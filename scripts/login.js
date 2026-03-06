function eyebutton() {
  const eyeBtn = document.getElementById('eyeBtn');
  const passInput = document.getElementById('login-password')

  const eye = eyeBtn.querySelector('#eye');
  
  if(eye.classList.contains('fa-eye')) {
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');

    passInput.type = 'text'

  } else {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    
    passInput.type = 'password'
  }
  
}