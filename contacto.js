document.getElementById("button-up").addEventListener("click", scrollUp);

const campoNombre = document.getElementById("nombreContacto");
const campoEmail = document.getElementById("emailContacto");
const campoTelefono = document.getElementById("telefonoContacto");
const campoMensaje = document.getElementById("mensajeContacto");

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

///

buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 5) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 5) {
    buttonUp.style.transform = "scale(0)";
  }
};

const validateName = (valor, campo) => {
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};
const validateEmail = (valor, campo) => {
  if (valor.trim().length < 4) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};
const validateNumber = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 8 || valor.trim().length > 10) {
    campo.classList = "form-control is-invalid";
    return false;
  }
  campo.classList = "form-control is-valid";
  return true;
};

campoNombre.addEventListener("blur", (e) => {
  validateName(e.target.value, campoNombre);
});
campoEmail.addEventListener("blur", (e) => {
  validateEmail(e.target.value, campoEmail);
});
campoTelefono.addEventListener("blur", (e) => {
  validateNumber(e.target.value, campoTelefono);
});
campoMensaje.addEventListener("blur", (e) => {
  validateName(e.target.value, campoMensaje);
});
