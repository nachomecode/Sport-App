
let teams = JSON.parse(localStorage.getItem('teams')) || []; //compañera acá almaceno los nombres de los equipos q se agregan, q es un arreglo x []


function updateTeamCount() {
  document.getElementById('team-count').textContent = `Equipos apuntados: ${teams.length}`;
}

function saveTeams() {
  localStorage.setItem('teams', JSON.stringify(teams)); // Guarda el arreglo de equipos en la memoria local
}

function addTeam() {
  const teamName = prompt('Nombre del equipo:'); // Se Solicita el nombre del equipo
  const teamFlag = prompt('URL de la bandera o avatar:'); //// Solicita la URL de la bandera
  if (teamName && teamFlag) {
    teams.push({ name: teamName, flag: teamFlag }); //// Añade el nuevo equipo al arreglo
    renderTeams();
    updateTeamCount();
  }
}

function deleteTeam(index) {
  teams.splice(index, 1);
  renderTeams();
  updateTeamCount();
}

function editTeam(index) {
  const newName = prompt('Nuevo nombre del equipo:');
  if (newName) {
    teams[index].name = newName;
    renderTeams();
  }
}

function renderTeams() {
  const listElement = document.getElementById('team-list'); // Obtiene el contenedor de la lista de equipos
  listElement.innerHTML = '';  // Limpia la lista actual
  teams.forEach((team, index) => {   // Para cada equipo en el arreglo
    const teamElement = document.createElement('div');   // Crea un nuevo div para el equipo
    teamElement.className = 'team-item';  // Asigna la clase para estilos
    teamElement.innerHTML = `
      <img src="${team.flag}" alt="${team.name}" width="50" height="50">
      <span>${team.name}</span>
      <button onclick="editTeam(${index})">Editar</button>
      <button onclick="deleteTeam(${index})">Eliminar</button>
    `;
    listElement.appendChild(teamElement); // Añade el div al contenedor de la lista
  });
}

document.getElementById('add-team').addEventListener('click', addTeam);
updateTeamCount();

// renderTeams: se encarga de crear y mostrar los elementos visuales que representan a cada equipo en la página web, 
//permitiendo también la edición y eliminación de estos mediante botones interactivos. 
