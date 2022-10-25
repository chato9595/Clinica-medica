import { validateNumber } from "./validadores.js";


document.getElementById("button-up").addEventListener("click", scrollUp);

const campoNombre = document.getElementById("nombreContacto");
const campoEmail = document.getElementById("emailContacto");
const campoTelefono = document.getElementById("telefonoContacto");

const formularioContacto = document.getElementById("formMensaje");

formularioContacto.addEventListener("submit", (e) => {
  
  if (
    validateName(campoNombre.value, campoNombre) &&
    validateEmail(campoEmail.value, campoEmail) &&
    validateNumber(campoTelefono.value, campoTelefono)
    
  ) {
    e.preventDefault();  
    Swal.fire({
      title: "Mensaje enviado",
      text: "Gracias por contactarte con nosotros",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    formularioContacto.reset();
    campoNombre.classList = "form-control";
    campoEmail.classList = "form-control";
    campoTelefono.classList = "form-control";
    
    
    
  }
  else{
    e.preventDefault();
    Swal.fire({
      title: "Error",
      text: "Revise los campos",
      icon: "warning",
      confirmButtonText: "Aceptar",
    });
  }
});


function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 1);
  }
}

const buttonUp = document.getElementById("button-up");

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
  const regex= /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regex.test(valor)) {
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
 

campoNombre.addEventListener("blur", (e) => {
  validateName(e.target.value, campoNombre);
});
campoEmail.addEventListener("blur", (e) => {
  validateEmail(e.target.value, campoEmail);
});
campoTelefono.addEventListener("blur", (e) => {
  validateNumber(e.target.value, campoTelefono);
});

