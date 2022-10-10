import { rellenarFormulario } from "./editarPaciente.js";
import { eliminarPaciente } from "./eliminarPaciente.js";

export const cargarPacienteTabla = (paciente) => {
  const tbody = document.getElementById("tbody_tablaPacientes");
  const tr = document.createElement("tr");
  const tdNombre = document.createElement("td");
  const tdFecha = document.createElement("td");
  const tdDni = document.createElement("td");
  const tdTelefono = document.createElement("td");
  const tdObraSocial = document.createElement("td");
  const tdSexo = document.createElement("td");
  const tdEmail = document.createElement("td");

  tdNombre.innerText = paciente.nombre;
  tdFecha.innerText = paciente.fecha;
  tdDni.innerText = paciente.dni;
  tdTelefono.innerText = paciente.telefono;
  tdObraSocial.innerText = paciente.obraSocial;
  tdSexo.innerText = paciente.sexo;
  tdEmail.innerText = paciente.email;

  tr.appendChild(tdNombre);
  tr.appendChild(tdFecha);
  tr.appendChild(tdDni);
  tr.appendChild(tdTelefono);
  tr.appendChild(tdObraSocial);
  tr.appendChild(tdSexo);
  tr.appendChild(tdEmail);

  const tdOptions = document.createElement("td");
  const botonEditar = document.createElement("button");
  const botonEliminar = document.createElement("button");

  botonEditar.innerText = "Editar";
  botonEditar.classList.add("btn", "btn-warning", "btn-sm");
  botonEliminar.innerText = "Eliminar";
  botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
  botonEditar.onclick = () => {
    rellenarFormulario(paciente.dni);
  };
  botonEliminar.onclick = () => {
    eliminarPaciente(paciente.dni);
  };

  tdOptions.appendChild(botonEditar);
  tdOptions.appendChild(botonEliminar);
  tr.appendChild(tdOptions);
  tbody.appendChild(tr);
};


