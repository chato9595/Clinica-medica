export const validadorSelect = (valor, campo) => {
  if (valor === "0") {
    campo.classList.add("is-invalid");
    return false;
  } else {
    
  campo.classList.add("is-valid");

   
    return true;
  }
};

export const validadorFecha = (valor, campo) => {
  if (valor === "") {
    campo.classList.add("is-invalid");
    
    return false;
  } else {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
  }
};
