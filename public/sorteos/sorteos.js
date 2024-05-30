
let teams = [];

function updateTeamCount() {
  document.getElementById('team-count').textContent = `Equipos apuntados: ${teams.length}`;
}

function addTeam() {
  const teamName = prompt('Nombre del equipo:');
  const teamFlag = prompt('URL de la bandera o avatar:');
  if (teamName && teamFlag) {
    teams.push({ name: teamName, flag: teamFlag });
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
  const listElement = document.getElementById('team-list');
  listElement.innerHTML = '';
  teams.forEach((team, index) => {
    const teamElement = document.createElement('div');
    teamElement.className = 'team-item';
    teamElement.innerHTML = `
      <img src="${team.flag}" alt="${team.name}" width="50" height="50">
      <span>${team.name}</span>
      <button onclick="editTeam(${index})">Editar</button>
      <button onclick="deleteTeam(${index})">Eliminar</button>
    `;
    listElement.appendChild(teamElement);
  });
}

document.getElementById('add-team').addEventListener('click', addTeam);
updateTeamCount();
