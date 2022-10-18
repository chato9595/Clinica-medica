let loginButton = document.getElementById("buttonIngresar");

let usuarioLogin = document.getElementById("email");
let contraseñaLogin = document.getElementById("password");

let usuario = {
    clave: 1234, 
    nombre: 'admin@gmail.com'
}

loginButton.addEventListener("blur", (e) => {
  e.preventDefault();
  if (usuarioLogin === usuario.nombre && contraseñaLogin === usuario.clave) {
    window.location.href = "./admin.html";
    console.log("contrase;a correcta");
  } else {
    Swal.fire({
      title: "Error",
      text: "Acceso denegado",
      icon: "warning",
    });
  }
});

/*
  if (usuarioLogin != "" && contraseñaLogin != "") {
    let logged = false;
    let response = JSON.parse(localStorage.getItem("users"));
    let userSesion = response.map((item) => {
      if (
        item.email === usuarioLogin.value &&
        item.clave === contraseñaLogin.value
      ) {
        let update = {
          ...item,
          sesion: true,
        };
        logged = true;
        return update;
      } else {
        return item;
      }
    });

    if (logged) {
      localStorage.setItem("users", JSON.stringify(userSesion));
      window.location.href = "./admin.html";
    } else {
      Swal.fire({
        title: "Error",
        text: "Acceso denegado",
        icon: "warning",
      });
    }
  } else {
    Swal.fire({
      title: "Error",
      text: "Acceso denegado",
      icon: "warning",
    });
  }
});
*/
/*

let contraseña= contraseñaLogin.getPassword()

contraseña = new String('contraseña')

if(usuarioLogin.getText().equals('admin@gmail.com') && contraseña.equals('1234')){
    this.dispose()

    Swal.fire({
        title: "Exito",
        text: "Se ingreso exitosamente",
        icon: "success",
      });
} else {
    Swal.fire({
        title: "Error",
        text: "Acceso denegado",
        icon: "warning",
      });
}


*/

/*
export const validateUsuario = (valor, campo) =>{
    if(valor.trim() === usuarioLog){
        campo.classList = 'form-control is-valid'
        return true
    }
    campo.classList= 'form-control is-invalid'
    return false
}

export const validateContraseña =(valor, campo) =>{
    if(valor.trim() === contraseña){
        campo.classList = 'form-control is-valid'
        return true
    }
    campo.classList= 'form-control is-invalid'
    return false
    
}*/

/*
function validacion(){
    if(usuarioLogin(e.target.value) != usuario && contraseñaLogin(e.target.value) != clave){
        Swal.fire({
            title: "Error",
            text: "Acceso denegado",
            icon: "warning",
          });
          console.log('usuario incorrecto')
        return false
        
    } else{
        Swal.fire({
            title: "Exito!",
            text: "Ingresaste exitosamente",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar contacto",
            cancelButtonText: "Cancelar",
          })
    }
    
}
*/
