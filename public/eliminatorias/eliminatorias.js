function generarTablas() {
    // teams a repartir
    const teams = [
        "Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4",
        "Equipo 5", "Equipo 6", "Equipo 7", "Equipo 8",
        "Equipo 9", "Equipo 10", "Equipo 11", "Equipo 12",
        "Equipo 13", "Equipo 14", "Equipo 15", "Equipo 16"
    ];

    // Mezclar los teams de forma aleatoria
    for (let i = teams.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));
        [teams[i], teams[x]] = [teams[x], teams[i]];
    }

    // Contenedor de tablas
    const contenedorTablas = document.getElementById('contenedorTablas');
    contenedorTablas.innerHTML = ''; // Limpiar contenido anterior

    // Crear 4 tablas
    for (let i = 0; i < 4; i++) {
        const tabla = document.createElement('table');
        const encabezado = tabla.createTHead();
        const filaEncabezado = encabezado.insertRow();
        const celdaEncabezado = filaEncabezado.insertCell();
        celdaEncabezado.colSpan = 1;
        celdaEncabezado.innerText = `Tabla ${i + 1}`;

        const cuerpo = tabla.createTBody();

        // Añadir 4 teams a cada tabla
        for (let j = 0; j < 4; j++) {
            const fila = cuerpo.insertRow();
            const celda = fila.insertCell();
            celda.innerText = teams[i * 4 + j];
        }

        // Añadir la tabla al contenedor
        contenedorTablas.appendChild(tabla);
    }