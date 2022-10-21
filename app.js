
let turnos = [];
let turnosLS = JSON.parse(localStorage.getItem('Lista turnos'));
const cardsTurno = document.getElementById('cards_turno');

if (turnosLS != null) {
     turnos = turnosLS;
} else {
    const mjeTurno = document.createElement('p');
    mjeTurno.innerText = 'No hay turnos programados';
    cardsTurno.appendChild(mjeTurno);
    
  }


turnos.forEach((turno) => {
const divSeparacion = document.createElement('div');
const  divCard = document.createElement('div');
divCard.classList.add('card');
const divCarHeader = document.createElement('div');
divCarHeader.classList.add('card-header');
divCarHeader.innerText = "N°: "+turno.id + ' ' + turno.fecha + ' ' + turno.hora;

divCard.appendChild(divCarHeader);

const lista = document.createElement('ul');
lista.classList.add('list-group list-group-flush');
const fila1 = document.createElement('li');
fila1.classList.add('list-group-item');
fila1.innerText = 'Paciente: ' + turno.paciente;
lista.appendChild(fila1);

const fila2 = document.createElement('li');
fila2.classList.add('list-group-item');
fila2.innerText = 'Especialidad: ' + turno.especialidad;
lista.appendChild(fila2);

const fila3 = document.createElement('li');
fila3.classList.add('list-group-item');
fila3.innerText = 'Médico: ' + turno.medico;
lista.appendChild(fila3);

const fila4 = document.createElement('li');
fila4.classList.add('list-group-item');
fila4.innerText = 'Descripcion: ' + turno.descripcion;
lista.appendChild(fila4);

divCard.appendChild(lista);

});
