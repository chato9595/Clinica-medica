// const usuarioLogin = document.getElementById('usuarioLogin')
// const contraseñaLogin = document.getElementById('contraseñaLogin')


let usuarioLog = 'admin@gmail.com'
let contraseña= 'rolling'



export const validateUsuario = (valor, campo) =>{
    if(valor.trim() === usuarioLog){
        
        return true
    }
    
    return false
}

export const validateContraseña =(valor, campo) =>{
    if(valor.trim() === contraseña){
        
        return true
    }
    
    return false
    
}

// function validacion(){
//     if(usuarioLogin.value === usuarioLog){
//         alert ('ERROR. Usuario incorrecto.')
//         return false
//     }
//     const regex = /^\d+$/;
//     if (!regex.test(valor)) {
//       return false;

//     }
//     if(usuarioLogin.value<1){
//         return false
//     }
    
//     if(contraseñaLogin.value<1){
//         return false
//     }

//     if(contraseñaLogin.value === contraseña){
//         alert ('ERROR. Contraseña incorrecta.')
//         return false
//     }
//     return true
// }