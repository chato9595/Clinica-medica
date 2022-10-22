import { updateTabla } from "./administrador.js";

export const eliminarTurno = (id) => {
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
