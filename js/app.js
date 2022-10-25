import { Medico } from "./Medico.js";
import { formatoFecha } from "./fecha.js";
import { validadorSelect } from "./validadores.js";

const ginecologo = new Medico(
  "Jorge",
  "Paz Rojas",
  "3865456123",
  "Ginecología"
);
const dermatologo = new Medico(
  "Martin",
  "Stisman",
  "3811246514",
  "Dermatología"
);
const nutricionista = new Medico(
  "Mariana",
  "Gonzalez",
  "3814561234",
  "Nutrición"
);
const oncologo = new Medico("Rafael", "Soria", "3814524354", "Oncología");
const endocrinologo = new Medico(
  "Edith",
  "Pastoriza",
  "3811231446",
  "Endocrinología"
);

const medicos = [
  ginecologo,
  dermatologo,
  nutricionista,
  oncologo,
  endocrinologo,
];
localStorage.setItem("Lista Medicos", JSON.stringify(medicos));

let turnos = [];
let turnosLS = JSON.parse(localStorage.getItem("Lista turnos"));
const cardsTurnos = document.getElementById("cardsTurnos");

if (turnosLS != null && turnosLS.length > 0) {
  turnos = turnosLS;
} else {
  const mjeTurno = document.createElement("h5");
  mjeTurno.classList.add("text-center");
  mjeTurno.innerText = "No hay turnos programados";
  cardsTurnos.appendChild(mjeTurno);
}


const mostrarTurnos = (turnos) => {
  turnos.sort((a, b) => a.hora - b.hora);
  turnos.sort((a, b) => {
    if (a.fecha < b.fecha) {
      return -1;
    }
    if (a.fecha > b.fecha) {
      return 1;
    }
    return 0;
  });
  turnos.forEach((turno) => {
    const divSeparacion = document.createElement("div");
    divSeparacion.classList.add("p-4", "col-md-6", "col-lg-4");

    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const numeroTurno = document.createElement("div");
    numeroTurno.innerText = "N°" + turno.id;

    const fechaTurno = document.createElement("div");
    fechaTurno.innerText = formatoFecha(turno.fecha);

    const horaTurno = document.createElement("div");
    horaTurno.innerText = turno.hora + ":00";


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
    divCarHeader.appendChild(horaTurno);

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
};

mostrarTurnos(turnos);

const formularioFiltro = document.getElementById("filtroMedico");
const selectMedico = document.getElementById("selectorMedico");
const aviso = document.getElementById("avisoFiltro");
const quitarFiltro = document.getElementById("quitarFiltro");

const mostrarMedicos = (medicos) => {
  medicos.forEach((medico) => {
    const option = document.createElement("option");
    option.value = medico.nombre + " " + medico.apellido;
    
    option.innerText = "Dr/a. "+ medico.nombre + " " + medico.apellido;
    selectMedico.appendChild(option);
  });
}
mostrarMedicos(medicos);

let medicoSeleccionado = "0";

selectMedico.addEventListener("blur", (e) => {
  if(validadorSelect(e.target.value,selectMedico)){
  medicoSeleccionado = e.target.value;
  
  }
});

formularioFiltro.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validadorSelect(medicoSeleccionado,selectMedico)) {
    const turnosFiltrados = turnos.filter(
      (turno) => {
        return turno.medico === medicoSeleccionado

      }
    );
    if(turnosFiltrados.length > 0){
      aviso.innerHTML = "";
      cardsTurnos.innerHTML = "";
    const mensaje = document.createElement("h5");
    mensaje.classList.add("text-center");
    mensaje.innerText = "Turnos programados para Dr/a. " + medicoSeleccionado;
    aviso.appendChild(mensaje);
    mostrarTurnos(turnosFiltrados);
    }else{
      cardsTurnos.innerHTML = "";
     aviso.innerHTML = "";
      const mensaje = document.createElement("h5");
      mensaje.classList.add("text-center");
      mensaje.innerText = "No hay turnos programados para Dr/a. " + medicoSeleccionado;
      aviso.appendChild(mensaje);

    }

  }
});

quitarFiltro.addEventListener("click", (e) => {
  e.preventDefault();
  cardsTurnos.innerHTML = "";
  aviso.innerHTML = "";
  selectMedico.value = "0";
  selectMedico.classList.remove("is-valid");
  selectMedico.classList.remove("is-invalid");
  mostrarTurnos(turnos);
});


  
document.getElementById("button-up").addEventListener("click", scrollUp);
export function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

///

const buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 5) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 5) {
    buttonUp.style.transform = "scale(0)";
  }
};