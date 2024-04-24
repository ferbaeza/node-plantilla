import { NuevoUsuario } from '../Domain/Entity/NuevoUsuario.js';
import { UsuarioYaExiste, UsuarioYaExisteException } from '../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';


export class RegistrarUsuarioCommandHandler{
    constructor(repository, service){
        this.repository = repository;
        this.service = service;
    }
    async handle(command){

        console.log('RegistrarUsuarioCommandHandler', command);
        const usuarioExiste = await this.service.comprobar(command.email);

        if (usuarioExiste) {
            throw new UsuarioYaExisteException(UsuarioYaExiste);
        }

        const registroUsuario = NuevoUsuario.fromCommand(command);

        return this.repository.save(registroUsuario);
    }
}