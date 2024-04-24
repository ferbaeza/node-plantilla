import { UsuarioYaExisteException } from '../../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';


export class EmailUsuarioExisteService {
    constructor(repository){
        this.repository = repository;
    }

    comprobar = async (email) => {
       const existeUsuario = await this.repository.findByEmail(email);
        if(existeUsuario){
            throw new UsuarioYaExisteException();
        }
    }
}