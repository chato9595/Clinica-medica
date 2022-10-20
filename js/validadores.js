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
