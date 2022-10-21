import { scrollUp } from "./administrador.js";
import { rellenarFormulario } from "./editarTurno.js";
import { eliminarTurno } from "./eliminarTurno.js";

export const cargarTurnoTabla = (turno) => {
  const tbody = document.getElementById("turnos_tbody");
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  tdId.innerText = turno.id;
  tr.appendChild(tdId);

  const tdPaciente = document.createElement("td");
  tdPaciente.innerText = turno.paciente.split(" (")[0];
  tr.appendChild(tdPaciente);

  const tdDni= document.createElement("td");
  tdDni.innerText = turno.paciente.split(" (")[1].split(")")[0];
  tr.appendChild(tdDni);

  const tdEspecialidad = document.createElement("td");
  tdEspecialidad.innerText = turno.especialidad;
  tr.appendChild(tdEspecialidad);

  const tdMedico = document.createElement("td");
  tdMedico.innerText = turno.medico;
  tr.appendChild(tdMedico);

  const tdFecha = document.createElement("td");
  tdFecha.innerText = turno.fecha;
  tr.appendChild(tdFecha);

  const tdHora = document.createElement("td");
  tdHora.innerText = turno.hora + ":00";
  tr.appendChild(tdHora);

  const tdDescripcion = document.createElement("td");
  tdDescripcion.innerText = turno.descripcion;
  tr.appendChild(tdDescripcion);

  const tdAcciones = document.createElement("td");
  tdAcciones.classList.add("tdOptions", "align-middle" );
  const botonEditar = document.createElement("button");
  botonEditar.classList.add(
    "btn",
    "btn-secondary",
    "btn-sm",
    "m-1",
    "text-light",
    "botonEdit",
    "px-3"
  );
  botonEditar.innerText = "Editar";
  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "m-1",
    "text-light",
    "botonDelete"
  );

  botonEditar.addEventListener("click", () => {
    scrollUp();
    
  });
  botonEliminar.innerText = "Eliminar";

  botonEditar.onclick = () => {
    rellenarFormulario(turno.id);
  };
  botonEliminar.onclick = () => {
    eliminarTurno(turno.id);
  };

  tdAcciones.appendChild(botonEditar);
  tdAcciones.appendChild(botonEliminar);
  tr.appendChild(tdAcciones);

  tbody.appendChild(tr);
};
