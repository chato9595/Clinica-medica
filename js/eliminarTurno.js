import { updateTabla } from "./administrador.js";
const formulario = document.getElementById("formularioTurno");
const campoPaciente = document.getElementById("paciente");
const campoEspecialidad = document.getElementById("especialidad");
const campoMedico = document.getElementById("medico");
const campoFecha = document.getElementById("fechaTurno");
const campoHorario = document.getElementById("horario");
const campoDescripcion = document.getElementById("descripcion");
export const eliminarTurno = (id) => {
  campoPaciente.classList = "form-select";
  campoEspecialidad.classList = "form-select";
  campoMedico.classList = "form-select";
  campoFecha.classList = "form-control";
  campoHorario.classList = "form-select";
  campoDescripcion.classList = "form-control";
  const turnos = JSON.parse(localStorage.getItem("Lista turnos"));
  const indexBorrar = turnos.findIndex((turno) => {
    return turno.id === id;
  });

  Swal.fire({
    title: "¿Está seguro que desea eliminar el turno?",
    text: "No podrá recuperarlo",
    icon: "warning",
    showCancelButton: true,

    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      turnos.splice(indexBorrar, 1);
      localStorage.setItem("Lista turnos", JSON.stringify(turnos));
      updateTabla();
      Swal.fire({
        title: "Turno eliminado con éxito",
        icon: "success",
      });
    }
  });
};
