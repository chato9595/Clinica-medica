import { actualizarTabla } from "./CRUDpac.js";
const campoNombre = document.getElementById("nombrePaciente");
const campoFecha = document.getElementById("FnacPaciente");
const campoDni = document.getElementById("DniPaciente");
const campoTelefono = document.getElementById("telefonoPaciente");
const campoObraSocial = document.getElementById("OsPaciente");
const campoSexo = document.getElementById("sexoPaciente");
const campoEmail = document.getElementById("emailPaciente");
export const eliminarPaciente = (dni) => {
    campoNombre.classList="form-control";
    campoFecha.classList="form-control";
    campoDni.classList="form-control";
    campoTelefono.classList="form-control";
    campoObraSocial.classList="form-select";
    campoSexo.classList="form-select";
    campoEmail.classList="form-control";
    const pacientes = JSON.parse(localStorage.getItem("Lista Pacientes"));
    const indiceTarget = pacientes.findIndex((paciente) => paciente.dni == dni);
    Swal.fire({
        title: "¿Estas seguro?",
        text: "No podras revertir esta accion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            pacientes.splice(indiceTarget, 1);
            localStorage.setItem("Lista Pacientes", JSON.stringify(pacientes));
            
            actualizarTabla();
            Swal.fire({
                title: "Paciente eliminado con exito",
                icon: "success",
            }).then((result) => {
                location.reload();
            }
            );
        }
    });
};


           

 