export const validateUsuario = (valor, campo) => {
  if (valor.trim() === usuarioLog) {
    return true;
  }

  return false;
};

export const validateContraseña = (valor, campo) => {
  if (valor.trim() === contraseña) {
    return true;
  }

  return false;
};
