const usuarioLogin = document.getElementById('usuarioLogin')
const contraseñaLogin = document.getElementById('contraseñaLogin')


let usuarioLog = 'admin@gmail.com'
let contraseña= 1234


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

function validacion(){
    if(usuarioLogin(e.target.value)  !== usuarioLog){
        alert ('ERROR. Usuario incorrecto.')
        return false
        console.log('usuario incorrecto')
    }
    const regex = /^\d+$/;
    if (!regex.test(valor)) {
      return false;

    }
    if(usuarioLogin.value<1){
        return false
    }
    
    if(contraseñaLogin(e.target.value)<1){
        return false
    }

    if(contraseñaLogin(e.target.value) !== contraseña){
        alert ('ERROR. Contraseña incorrecta.')
        return false
    }
    return true
    console.log('correcto')
}