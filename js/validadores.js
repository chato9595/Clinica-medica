export const validadorSelect = (valor, campo) => {
  if (valor == "0") {
    campo.classList.add("is-invalid");
    return false;
  } else {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");

    return true;
  }
};

export const validadorFecha = (valor, campo) => {
  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/.test(valor);
  if (!regex) {
    campo.classList.add("is-invalid");

    return false;
  } else {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
  }
};

export const validateName = (valor, campo) => {
  // que no este vacio
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

export const validateNumber = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 10 || valor.trim().length > 11) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regex = /^\d+$/;

  if (!regex.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};
export const validateDNI = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 7 || valor.trim().length > 8) {
    campo.classList.add("is-invalid");
    return false;
  }

  const regex = /^\d+$/;

  if (!regex.test(valor)) {
    campo.classList.add("is-invalid");
    return false;
  }
campo.classList.remove("is-invalid");
campo.classList.add("is-valid");
 
  return true;
};

export const validateEmail = (valor, campo) => {
  // que no este vacio
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

export const validateDate = (valor, campo) => {
  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/.test(valor);
  if (!regex) {
    campo.classList = "form-control is-invalid";
    return false;
  }
  campo.classList = "form-control is-valid";
  return true;
};

export const validateSelect = (valor, campo) => {
  if (valor === "0") {
    campo.classList = "form-control is-invalid";
    return false;
  }
  campo.classList = "form-control is-valid";
  return true;
};
