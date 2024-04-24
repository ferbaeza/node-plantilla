export const UsuarioYaExiste = "Ya existe un usuario con ese email";
export const UsuarioNoExiste = "Usuario no existe con ese email";
export const UsuarioPasswordErroneo = "Contraseña incorrecta";
export const UsuarioIdNOExiste = "Usuario no existe con ese id";
export const NOExistenUsuarios = "No existen usuarios";
export const UsuariosEmailYaExiste = "Ya existe un usuario con ese email";


export class UsuarioYaExisteException{
    constructor(){
        this.message = UsuarioYaExiste;
    }
}
export class UsuarioNOExisteException{
    constructor(){
        this.message = UsuarioNoExiste;
    }
}

export class UsuarioPasswordErroneoException{
    constructor(){
        this.message = UsuarioPasswordErroneo;
    }
}

export class UsuarioIdNOExisteException {
    constructor(){
        this.message = UsuarioIdNOExiste;
    }
}

export class NOExistenUsuariosException {
    constructor() {
        this.message = NOExistenUsuarios;
    }
}

export class UsuariosEmailYaExisteException {
    constructor() {
        this.message = UsuariosEmailYaExiste;
    }
}