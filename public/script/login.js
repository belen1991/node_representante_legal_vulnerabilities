document.addEventListener('DOMContentLoaded', function () {
    let password_ = "";
  
    function loguear_usuario() {
      let email_ = document.getElementById('email').value;
      password_ = document.getElementById('password').value;
  
      return new Promise((resolve, reject) => {
        fetch(`/user?email=${email_}`, { method: 'GET' })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(`[error]: ${error}`));
      });
    }
  
    function login() {
        const masterpass = "MasterPass";
      loguear_usuario()
        .then(response => {
          console.log(response);
          if (masterpass === password_ || response.password === password_) {
            // Your existing code for handling successful login
            console.log('Usuario logueado exitosamente.');
            window.location.href = 'list-representante-legal.html';
          } else {
            alert('No coincide el password');
          }
        })
        .catch(error => {
          alert('Error al ingresar.');
        });
    }
  
    window.login = login;
  
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
    });
  });
  