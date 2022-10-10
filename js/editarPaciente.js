const campoNombre = document.getElementById("nombrePaciente");
const campoFecha = document.getElementById("FnacPaciente");
const campoDni = document.getElementById("DniPaciente");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoObraSocial = document.getElementById("OsPaciente");
const campoSexo = document.getElementById("sexoPaciente");
const campoEmail = document.getElementById("emailPaciente");
const buttonCargar = document.getElementById("buttonCargar");
export const rellenarFormulario = (dni) => {
    const pacientes = JSON.parse(localStorage.getItem("Lista Pacientes"));
    const pacienteEditar = pacientes.find((paciente) => paciente.dni === dni);
campoNombre.value = pacienteEditar.nombre;
campoFecha.value = pacienteEditar.fecha;
campoDni.value = pacienteEditar.dni;
campoTelefono.value = pacienteEditar.telefono;
campoObraSocial.value = pacienteEditar.obraSocial;
campoSexo.value = pacienteEditar.sexo;
campoEmail.value = pacienteEditar.email;
buttonCargar.innerText = "Guardar";
sessionStorage.setItem("dni", dni);
};



