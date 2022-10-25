const usuario = document.getElementById("usuarioLogin");
const contraseña = document.getElementById("contrasenaLogin");
const formulario = document.getElementById("formUsuario");

const user = "admin";
const pass = "rolling";


function validateUser() {
  if (usuario.value == user) {
    return true;
  }
  return false;
}

function validatePass() {
  if (contraseña.value == pass) {
    return true;
  }
  return false;
}

function validateForm() {
  if (validateUser() && validatePass()) {
    return true;
  }
  return false;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    location.reload();
    window.open("../views/admin.html");
  } else {
    Swal.fire({
      title: "Error",
      text: "Acceso denegado",
      icon: "warning",
    });
  }
});
  
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

///

const buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 5) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 5) {
    buttonUp.style.transform = "scale(0)";
  }
};