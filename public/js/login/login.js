localStorage.setItem('username', "pepa");
localStorage.setItem('password', "1234");


const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (event) => {
    event.preventDefault(); // Evita la recarga predeterminada del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Almacenar la información del usuario (en este caso, lo hacemos en localStorage)

    // Redirigir a la siguiente página (reemplaza "segunda-pagina.html" con la URL real)
    window.location.href = '../../sorteos/sorteo.html';
});