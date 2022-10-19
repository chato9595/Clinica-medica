import { horariosSelect, medicosSelect } from "./cargarSelects.js";

const formulario = document.getElementById("formularioTurno");
const campoPaciente = document.getElementById("paciente");
const campoEspecialidad = document.getElementById("especialidad");
const campoMedico = document.getElementById("medico");
const campoFecha = document.getElementById("fechaTurno");
const campoHorario = document.getElementById("horario");
const campoDescripcion = document.getElementById("descripcion");

const botonCargarTurno = document.getElementById("cargarTurno");

export const rellenarFormulario = (id) => {
  const turnos = JSON.parse(localStorage.getItem("Lista turnos"));
  const turnoEditar = turnos.find((turno) => {
    return turno.id === id;
  });
  campoPaciente.value = turnoEditar.paciente;
  campoEspecialidad.value = turnoEditar.especialidad;
  medicosSelect();
  campoMedico.value = turnoEditar.medico;
  campoFecha.value = turnoEditar.fecha;
  campoHorario.innerHTML = `<option value="${turnoEditar.hora}">${turnoEditar.hora}:00</option>`;
  horariosSelect();
  campoDescripcion.value = turnoEditar.descripcion;
  botonCargarTurno.innerText = "Editar";
  sessionStorage.setItem("idTurno", id);
};
