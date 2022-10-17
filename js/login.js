const usuario = document.getElementById("usuarioLogin");
const contraseña = document.getElementById("contrasenaLogin");
const formulario = document.getElementById("formUsuario");

const user = "admin";
const pass = 1234;


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
    window.open("admin.html");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
