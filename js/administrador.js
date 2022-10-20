import {
  horariosSelect,
  medicosSelect,
  pacientesSelect,
} from "./cargarSelects.js";
import { cargarTurnoTabla } from "./cargarTurno.js";
import { Medico } from "./Medico.js";
import { Turno } from "./Turno.js";
import { validadorFecha, validadorSelect } from "./validadores.js";

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

const formulario = document.getElementById("formularioTurno");
const campoPaciente = document.getElementById("paciente");
const campoEspecialidad = document.getElementById("especialidad");
const campoMedico = document.getElementById("medico");
const campoFecha = document.getElementById("fechaTurno");
const campoHorario = document.getElementById("horario");
const campoDescripcion = document.getElementById("descripcion");

const botonCargarTurno = document.getElementById("cargarTurno");

console.log(campoPaciente);

let paciente = "";
let especialidad = "";
let medico = "";
let fecha = "";
let horario = "";
let descripcion = "";

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

let turnosLS = JSON.parse(localStorage.getItem("Lista turnos"));
let turnos = [];

if (turnosLS != null) {
  turnos = turnosLS;
  turnos.forEach((turno) => {
    cargarTurnoTabla(turno);
  });
}
//esta funcion carga los pacientes en el select del formulario
pacientesSelect();

campoPaciente.addEventListener("blur", (e) => {
  console.log(campoPaciente.value, campoPaciente);
  validadorSelect(campoPaciente.value, campoPaciente);
  if (validadorSelect(campoPaciente.value, campoPaciente)) {
    paciente = campoPaciente.value;
  }
});

campoEspecialidad.addEventListener("blur", (e) => {
  validadorSelect(e.target.value, campoEspecialidad);
  if (validadorSelect(e.target.value, campoEspecialidad)) {
    especialidad = e.target.value;
    medicosSelect(); //carga los medicos segun la especialidad seleccionada
  }
});

campoMedico.addEventListener("blur", (e) => {
  validadorSelect(e.target.value, campoMedico);
  if (validadorSelect(e.target.value, campoMedico)) {
    medico = e.target.value;
  }
});

campoFecha.addEventListener("blur", (e) => {
  validadorSelect(e.target.value, campoFecha);
  if (validadorSelect(e.target.value, campoFecha)) {
    fecha = e.target.value;
    campoHorario.innerHTML= `<option value="0">Seleccione un horario</option>`
    horariosSelect();
    
  }
});
campoHorario.addEventListener("blur", (e) => {
  validadorSelect(e.target.value, campoHorario);
  if (validadorSelect(e.target.value, campoHorario)) {
    horario = e.target.value;
  }
});

campoDescripcion.addEventListener("blur", (e) => {
  descripcion = e.target.value;
});

const addTurnoLS = (turno) => {
  turnos.unshift(turno);
  localStorage.setItem("Lista turnos", JSON.stringify(turnos));
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let Editing;
  if (botonCargarTurno.innerText === "Editar") {
    Editing = true;
  } else {
    Editing = false;
  }
  paciente = campoPaciente.value;
  especialidad = campoEspecialidad.value;
  medico = campoMedico.value;
  fecha = campoFecha.value;
  horario = campoHorario.value;
  descripcion = campoDescripcion.value;

  if (
    validadorSelect(paciente, campoPaciente) &&
    validadorSelect(especialidad, campoEspecialidad) &&
    validadorSelect(medico, campoMedico) &&
    validadorFecha(fecha, campoFecha) &&
    validadorSelect(horario, campoHorario)
  ) {
    if (!Editing) {
      const turno = new Turno(
        paciente,
        especialidad,
        medico,
        fecha,
        horario,
        descripcion
      );
      addTurnoLS(turno);
      cargarTurnoTabla(turno);
      Swal.fire({
        title: "Turno cargado con éxito",
        icon: "success",
      });
    } else {
      const idTurno = Number(sessionStorage.getItem("idTurno"));
      sessionStorage.removeItem("idTurno");
      const indexTurno = turnos.findIndex((turno) => {
        return turno.id === idTurno;
      });
      turnos[indexTurno].paciente = paciente;
      turnos[indexTurno].especialidad = especialidad;
      turnos[indexTurno].medico = medico;
      turnos[indexTurno].fecha = fecha;
      turnos[indexTurno].horario = horario;
      turnos[indexTurno].descripcion = descripcion;

      localStorage.setItem("Lista turnos", JSON.stringify(turnos));
      Swal.fire({
        title: "Turno editado con éxito",
        icon: "success",
      });
      botonCargarTurno.innerText = "Cargar";
    }
    updateTabla();
    formulario.reset();
    campoPaciente.classList.remove("is-valid");
    campoEspecialidad.classList.remove("is-valid");
    campoMedico.classList.remove("is-valid");
    campoFecha.classList.remove("is-valid");
    campoHorario.classList.remove("is-valid");

  } else {
    Swal.fire({
      title: "Error al cargar turno",
      text: "Complete todos los campos",
      icon: "error",
    });
  }
});

export const updateTabla = () => {
  const turnosLS = JSON.parse(localStorage.getItem("Lista turnos"));
  const tbody = document.getElementById("turnos_tbody");
  tbody.innerHTML = "";
  turnosLS.forEach((turno) => {
    cargarTurnoTabla(turno);
  });
};

