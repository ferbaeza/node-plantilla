import { Criteria } from "../../../../../Shared/Criteria/Criteria.js";
import { UsuarioIdNOExiste, UsuarioIdNOExisteException } from "../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js";

export class FichaUsuarioCommandHandler{
    constructor(repository){
        this.repository = repository;
    }
    async handle(command){
        const criteria = new Criteria();
        criteria.where('id', command.id);
        const usuario = await this.repository.getEntity(criteria);
        if (usuario == false) {
            throw new UsuarioIdNOExisteException(UsuarioIdNOExiste);
        }
        return usuario;
    }
}