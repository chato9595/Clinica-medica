let turnos = [];
let turnosLS = JSON.parse(localStorage.getItem("Lista Turnos"));
const cardsTurnos = document.getElementById("cardsTurnos");

if (turnosLS != null) {
  turnos = turnosLS;
} else {
  const mjeTurno = document.createElement("p");
  mjeTurno.innerText = "No hay turnos programados";
  cardsTurnos.appendChild(mjeTurno);
}
console.log(turnos);

turnos.forEach((turno) => {
  const divSeparacion = document.createElement("div");
  divSeparacion.classList.add("p-4", "col-md-6", "col-lg-4");

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const numeroTurno = document.createElement("div");
  numeroTurno.innerText = "N°" + turno.id;

  const fechaTurno = document.createElement("div");
  fechaTurno.innerText = turno.fecha + " " + turno.hora + ":00" + "hs";

  const divCarHeader = document.createElement("div");

  divCarHeader.classList.add(
    "card-header",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "card_header"
  );
  divCarHeader.appendChild(numeroTurno);
  divCarHeader.appendChild(fechaTurno);

  divCard.appendChild(divCarHeader);

  const lista = document.createElement("ul");
  lista.classList.add("list-group", "list-group-flush");

  const fila1 = document.createElement("li");
  fila1.classList.add("list-group-item");
  fila1.innerText = "Paciente: " + turno.paciente;
  lista.appendChild(fila1);

  const fila2 = document.createElement("li");
  fila2.classList.add("list-group-item");
  fila2.innerText = "Especialidad: " + turno.especialidad;
  lista.appendChild(fila2);

  const fila3 = document.createElement("li");
  fila3.classList.add("list-group-item");
  fila3.innerText = "Médico: " + turno.medico;
  lista.appendChild(fila3);

  const fila4 = document.createElement("li");
  fila4.classList.add("list-group-item");
  fila4.innerText = "Descripcion: " + turno.descripcion;
  lista.appendChild(fila4);

  divSeparacion.appendChild(divCard);
  divCard.appendChild(lista);
  cardsTurnos.appendChild(divSeparacion);
});
