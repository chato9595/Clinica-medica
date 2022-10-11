export const validateName = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 2) {
      campo.classList = "form-control is-invalid";
      return false;
    }
  
    campo.classList = "form-control is-valid";
    return true;
  };
  
  export const validateNumber = (valor, campo) => {
    // que no este vacio
    if (valor.trim().length < 8) {
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
    const regex = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    if (!regex.test(valor)) {
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
      }