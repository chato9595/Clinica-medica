const acceso = sessionStorage.getItem("acceso");
const salirDeAdmin = document.getElementsByClassName("salirDeAdmin");
if (acceso === false || acceso === null) {
    window.open("../views/Error404.html", "_self");
}

for (let i = 0; i < salirDeAdmin.length; i++) {
    salirDeAdmin[i].addEventListener("click", (e) => {
   e.preventDefault();
   Swal.fire(
    {
        title: "¿Está seguro que desea salir?",
        text: "Deberá volver a loguearse para ingresar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#bc226f",
        cancelButtonColor: "#90A1BC",
        confirmButtonText: "Si, salir",
        cancelButtonText: "Cancelar",
    }
).then((result) => {
    if (result.isConfirmed) {
        sessionStorage.removeItem("acceso");
        window.open("../index.html", "_self");
    }
});

});
}




