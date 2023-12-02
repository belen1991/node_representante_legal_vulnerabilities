document.addEventListener('DOMContentLoaded', function () {
    let password_ = "";
    function loguear_usuario() {
        let email_ = document.getElementById('email').value;
        password_ = document.getElementById('password').value;

        const data = { 
            email: email_
        };
        sessionStorage.setItem('credentials', JSON.stringify(data));

        return new Promise((resolve, reject) => {
            const request_options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json' 
                },
                data
            };

            fetch('/user', request_options)
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
        loguear_usuario()
            .then(response => {
                console.log(response);
                if (response.body[0].password === password_) {
                    sessionStorage.setItem('password', password_);
                    console.log('Usuario logueado exitosamente. ');
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