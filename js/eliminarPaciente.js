import { actualizarTabla } from "./CRUDpac.js";

export const eliminarPaciente = (dni) => {
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
            Swal.fire("Eliminado!", "El paciente ha sido eliminado", "success");
            actualizarTabla();
        }
    });

}
