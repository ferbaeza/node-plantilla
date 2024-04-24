import { verificarPasswordUsuario } from '../../Shared/Domain/Service/UsuarioPasswordService.js';
import { UsuarioNOExisteException, UsuarioPasswordErroneoException } from '../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';


export class LoginCommandHandler{
    constructor(repository){
        this.repository = repository;
    }
    async handle(command){
        const usuario = await this.repository.findByEmail(command.email);

        if(usuario == false){
            throw new UsuarioNOExisteException();
        }
        const passwordCorrecto = await verificarPasswordUsuario(usuario, command.password);

        if(passwordCorrecto == false){
            throw new UsuarioPasswordErroneoException();
        }
        const usuarioLogueado = usuario.setActivoTrue();
        return this.repository.update(usuarioLogueado)
    }
}