import { cargarPacienteTabla } from "./cargarPaciente.js";
import { Paciente } from "./Paciente.js";
import { validateDate, validateEmail, validateName, validateNumber } from "./validadores.js";

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

///

let buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 5) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 5) {
    buttonUp.style.transform = "scale(0)";
  }
};

//
const formularioPaciente = document.getElementById("formPaciente");

const campoNombre = document.getElementById("nombrePaciente");
const campoFecha = document.getElementById("FnacPaciente");
const campoDni = document.getElementById("DniPaciente");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoObraSocial = document.getElementById("OsPaciente");
const campoSexo = document.getElementById("sexoPaciente");
const campoEmail = document.getElementById("emailPaciente");
const buttonCargar = document.getElementById("buttonCargar");

let nombre = "";
let fecha = "";
let dni = "";
let telefono = "";
let obraSocial = "";
let sexo = "";
let email = "";

let listPacientesJSON = localStorage.getItem("Lista Pacientes");
let listPacientes = JSON.parse(listPacientesJSON);

let pacientes = [];
if (listPacientes != null) {
  pacientes = listPacientes;
  pacientes.forEach((paciente) => {
    cargarPacienteTabla(paciente);
  });
}

campoNombre.addEventListener("change", (e) => {
  const esvalido = validateName(e.target.value, campoNombre);
  if (esvalido) {
    nombre = e.target.value;
  }
});
campoDni.addEventListener("change", (e) => {
  const esvalido = validateNumber(e.target.value, campoDni);
  if (esvalido) {
    dni = e.target.value;
  }
});
campoFecha.addEventListener("change", (e) => {
  const esvalido = validateDate(e.target.value, campoFecha);
  if (esvalido) {
    fecha = e.target.value;
  }
});
campoTelefono.addEventListener("change", (e) => {
  const esvalido = validateNumber(e.target.value, campoTelefono);
  if (esvalido) {
    telefono = e.target.value;
  }
});
campoObraSocial.addEventListener("change", (e) => {
  obraSocial = e.target.value;
});
campoSexo.addEventListener("change", (e) => {
  sexo = e.target.value;
});
campoEmail.addEventListener("change", (e) => {
  const esvalido = validateEmail(e.target.value, campoEmail);
  if (esvalido) {
    email = e.target.value;
  }
});

const cargarLocalStorage = (paciente) => {
  pacientes.unshift(paciente);
  localStorage.setItem("Lista Pacientes", JSON.stringify(pacientes));
};

formularioPaciente.addEventListener("submit", (e) => {
  let isEditando;
  if (buttonCargar.innerText === "Guardar") {
    isEditando = true;
  } else {
    isEditando = false;
  }
  nombre = campoNombre.value;
  fecha = campoFecha.value;
  dni = campoDni.value;
  telefono = campoTelefono.value;
  obraSocial = campoObraSocial.value;
  sexo = campoSexo.value;
  email = campoEmail.value;

  if (
    validateName(nombre, campoNombre) &&
    validateDate(fecha, campoFecha) &&
    validateNumber(dni, campoDni) &&
    validateNumber(telefono, campoTelefono) &&
    validateEmail(email, campoEmail)
  ) {
    if (!isEditando) {
      const paciente = new Paciente(
        nombre,
        fecha,
        dni,
        telefono,
        obraSocial,
        sexo,
        email
      );
      cargarLocalStorage(paciente);
      Swal.fire({
        title: "Exito!",
        text: "Paciente cargado correctamente",
        icon: "success",
      });
    } else {
      const dniTarget = sessionStorage.getItem("dni");
      sessionStorage.removeItem("dni");
      const indiceTarget = pacientes.findIndex(
        (paciente) => paciente.dni == dniTarget
      );
      pacientes[indiceTarget].nombre = nombre;
      pacientes[indiceTarget].fecha = fecha;
      pacientes[indiceTarget].dni = dni;
      pacientes[indiceTarget].telefono = telefono;
      pacientes[indiceTarget].obraSocial = obraSocial;
      pacientes[indiceTarget].sexo = sexo;
      pacientes[indiceTarget].email = email;

      localStorage.setItem("Lista Pacientes", JSON.stringify(pacientes));
      Swal.fire({
        title: "Exito!",
        text: "Datos modificados correctamente",
        icon: "success",
      });
      buttonCargar.innerHTML = "Cargar";
    }
    actualizarTabla();
    campoNombre.value = "";
    campoFecha.value = "";
    campoDni.value = "";
    campoTelefono.value = "";
    campoObraSocial.value = "";
    campoSexo.value = "";
    campoEmail.value = "";

    nombre = "";
    fecha = "";
    dni = "";
    telefono = "";
    obraSocial = "";
    sexo = "";
    email = "";
  } else {
    Swal.fire({
      title: "Error!",
      text: "Datos incorrectos",
      icon: "error",
    });
  }
});

export const actualizarTabla = () => {
  const listPacientes = JSON.parse(localStorage.getItem("Lista Pacientes"));
  const tabla = document.getElementById("tbody_tablaPacientes");
  tabla.innerHTML = "";
  listPacientes.forEach((paciente) => {
    cargarPacienteTabla(paciente);
  });
};
