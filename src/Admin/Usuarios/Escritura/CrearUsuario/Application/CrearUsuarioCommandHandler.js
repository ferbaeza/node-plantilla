import { NuevoUsuario } from '../Domain/Entity/NuevoUsuario.js';
import { UsuarioYaExiste, UsuarioYaExisteException } from '../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';


export class CrearUsuarioCommandHandler {
    constructor(repository, service){
        this.repository = repository;
        this.service = service;
    }
    async handle(command){

        const usuarioExiste = await this.service.comprobar(command.email);
        if (usuarioExiste) {
            throw new UsuarioYaExisteException(UsuarioYaExiste);
        }
        const registroUsuario = NuevoUsuario.fromCommand(command);
        return this.repository.registrarNuevoUsuario(registroUsuario);
    }
}