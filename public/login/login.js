const formulario = document.getElementById('loginBox');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita la recarga predeterminada del formulario

    const username = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Almacenar la información del usuario (en este caso, lo hacemos en localStorage)
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', password);

    // Redirigir a la siguiente página (reemplaza "segunda-pagina.html" con la URL real)
    window.location.href = 'index.html';
});