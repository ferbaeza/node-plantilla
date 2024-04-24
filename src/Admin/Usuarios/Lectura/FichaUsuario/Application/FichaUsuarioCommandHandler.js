import { UsuarioIdNOExiste, UsuarioIdNOExisteException } from "../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js";

export class FichaUsuarioCommandHandler{
    constructor(repository){
        this.repository = repository;
    }
    async handle(command){
        const usuario = await this.repository.findOne({id: command.id});
        if (usuario == false) {
            throw new UsuarioIdNOExisteException(UsuarioIdNOExiste);
        }
        return usuario;
    }

    // static async projects(command){
    //     return await this.repository.findOne({id: command.id});
    // }
}