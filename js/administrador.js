import { medicosSelect, pacientesSelect } from "./cargarSelects.js";
import { Medico } from "./Medico.js";
import { Turno } from "./Turno.js";
import { validadorSelect } from "./validadores.js";

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

let turnosLS = JSON.parse(localStorage.getItem("turnos"));
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


campoEspecialidad.addEventListener("change", (e) => {
  validadorSelect(e.target.value, campoEspecialidad);
  if (validadorSelect(e.target.value, campoEspecialidad)) {
    especialidad = e.target.value;
    medicosSelect(); //carga los medicos segun la especialidad seleccionada
  }
});

campoMedico.addEventListener("change", (e) => {
  validadorSelect(e.target.value, campoMedico);
  if (validadorSelect(e.target.value, campoMedico)) {
    medico = e.target.value;
  }
});

campoFecha.addEventListener("change", (e) => {
  validadorSelect(e.target.value, campoFecha);
  if (validadorSelect(e.target.value, campoFecha)) {
    fecha = e.target.value;
    horariosSelect();
  }
});
campoHorario.addEventListener("change", (e) => {
  validadorSelect(e.target.value, campoHorario);
  if (validadorSelect(e.target.value, campoHorario)) {
    horario = e.target.value;
  }
});

campoDescripcion.addEventListener("change", (e) => {
  descripcion = e.target.value;
});
