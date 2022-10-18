import { rellenarFormulario } from "./editarPaciente.js";
import { eliminarPaciente } from "./eliminarPaciente.js";
import { scrollUp } from "./CRUDpac.js";

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

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  };
 

  tdNombre.innerText = paciente.nombre;
  tdFecha.innerText = calcularEdad(paciente.fecha);
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

  tdNombre.classList.add("pt-3");
  tdFecha.classList.add("pt-3");
  tdDni.classList.add("pt-3");
  tdTelefono.classList.add("pt-3");
  tdObraSocial.classList.add("pt-3");
  tdSexo.classList.add("pt-3");
  tdEmail.classList.add("pt-3");


  const tdOptions = document.createElement("td");
  tdOptions.classList.add("tdOptions", "align-middle" );
  const botonEditar = document.createElement("button");
  const botonEliminar = document.createElement("button");

  botonEditar.innerText = "Editar";
  botonEditar.addEventListener("click", () => {
    scrollUp();
    
  });

    
  botonEditar.classList.add(
    "btn",
    "btn-secondary",
    "btn-sm",
    "m-1",
    "text-light",
    "botonEdit",
    "px-3"
  );
  botonEliminar.innerText = "Eliminar";
  botonEliminar.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "m-1",
    "text-light",
    "botonDelete"
  );
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
